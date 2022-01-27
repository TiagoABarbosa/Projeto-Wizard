import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function Weather() {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    let getWeather = async (lat, long) => {
        let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_API_KEY,
                lang: "pt",
                units: "metric",
                icon: [],
            },
        });
        setWeather(res.data);
        console.log(res.data);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
        });
    }, []);

    if (location === false) {
        return (
            <Fragment>
                <div className='container'>Habilite a localização do Browser para visualizar o clima.</div>
            </Fragment>
        );
    } else if (weather === false) {
        return (
            <Fragment>
                <div className='container'>Carregando o clima...</div>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <div className='container d-flex justify-content-around align-items-center'>
                    <h4>
                        {weather["name"]} <img width='70' alt='icon' src={`https://openweathermap.org/img/w/${weather["weather"][0]["icon"]}.png`} />
                    </h4>
                    <ul>
                        <li>Temperatura Atual: {weather["main"]["temp"].toFixed(0)}°C</li>
                        <li>Vento: {weather["wind"]["speed"]} km/h</li>
                        <li>Umidade: {weather["main"]["humidity"]}%</li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}
export default Weather;
