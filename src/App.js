import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  
  return (
    <div className="bg-slate-200 dark:bg-slate-600 dark:text-slate-50">
      <Navbar />
      <Home />
      <Contact />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
