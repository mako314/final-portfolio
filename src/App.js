import './App.css';
import NavBar from './PortfolioComponents/NavBar';
import AboutMe from './PortfolioComponents/AboutMe';
import HomePageHero from './PortfolioComponents/HomePageHero';
import ProjectCollection from './ProjectComponents/ProjectCollection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePageHero/>
      <ProjectCollection/>
    </div>
  );
}

export default App;
