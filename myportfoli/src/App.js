import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro'
import Skills from './components/Skills';
import Works from './components/Works'
import Contact from './components/Contact';
import Languages from './components/Languages';
import About from './components/About';


function App() {
  return (
    <div>
     <Navbar />
     <Intro />
     <About/>
     <Skills />
     <Languages/>
     <Works/>
     <Contact/>
    </div>
  );
}

export default App;
