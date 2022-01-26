import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import "./assets/css/styles.css";
import Servers from "./pages/Servers";

function App() {
  return (
    <>
      <NavBar />

      <Servers />

      <Weather />

      <Footer />
    </>
  );
}

export default App;
