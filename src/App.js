import './App.css';
import Nav from './components/Navbar';
import NameDisplay from './components/NameDisplay';
import Projects from './components/ProjectCard';

function App() {
  return (
    <div id="home" className='h-screen w-screen bg-white'>
      <Nav />
      <NameDisplay />
      <Projects />
    </div>
  );
}

export default App;
