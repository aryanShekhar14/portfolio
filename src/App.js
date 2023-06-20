import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";
import TechnicalSkill from "./components/TechnicalSkill";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <TechnicalSkill/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
