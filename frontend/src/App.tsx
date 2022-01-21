import NavBar from "components/NavBar";
import "assets/css/styles.css";
import Footer from "components/Footer/Index";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Servidores FMC</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
