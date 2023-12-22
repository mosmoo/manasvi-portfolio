import './App.css';
import Nav from './components/Navbar';
import NameDisplay from './components/NameDisplay';
import Projects from './components/ProjectCard';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div id="home" className='h-screen w-screen bg-white'>
      {/* <Nav /> */}
      <NameDisplay />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
