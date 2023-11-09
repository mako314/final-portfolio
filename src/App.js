import './App.css';
import NavBar from './PortfolioComponents/NavBar';
import AboutMe from './PortfolioComponents/AboutMe';
import HomePageHero from './PortfolioComponents/HomePageHero';
import ProjectCollection from './ProjectComponents/ProjectCollection';
import Footer from './PortfolioComponents/Footer';
import Contact from './PortfolioComponents/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePageHero/>
      <ProjectCollection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
