import "./App.css";
import Home from "./portfolioContainer/Home/Home";
import About from "./portfolioContainer/AboutMe/About";
import Services from "./portfolioContainer/Services/Services";
import Contact from "./portfolioContainer/Contact/Contact";
import Formation from "./portfolioContainer/Formation/Formation";
import Portfolio from "./portfolioContainer/Portfolio/Portfolio";
import Footer from "./portfolioContainer/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home/>
      <div className="about">
      <About/>
      </div>
      <div className="serv">
      <Services/>
      </div>
      <div className="formation">
      <Formation/>
      <div className="Portfolio">
      <Portfolio/>
      </div>
      </div>
      <div className="contact">
      <Contact/>
      </div>
      <div className="Footer">
      <Footer/>
      </div>
    </div>  
  );
}

export default App;
