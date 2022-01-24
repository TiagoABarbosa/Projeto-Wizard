import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import "./assets/css/styles.css"


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Servidores FMC</h1>
      </div>
      
        <Weather />

      <Footer />
    </>
  );
}

export default App;
