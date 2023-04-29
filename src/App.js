import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";


function App() {
  
  return (
    <div className="bg-slate-200 dark:bg-slate-600 dark:text-slate-50">
      <Navbar />
      <Home />
      <Contact />
      <Skill />
      <Footer />
      <ScrollToTop className="font-semibold" smooth component={<p style={{ color: "blue" }}>UP</p>}/>
    </div>
  );
}

export default App;
