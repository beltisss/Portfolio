import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Parcours from './components/Parcours';
import Passions from './components/Passions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profile } from './data/profile';
import { projects } from './data/projects';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Parcours profile={profile} />
        <Passions passions={profile.passions} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
