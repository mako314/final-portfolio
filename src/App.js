import './App.css';
import { useNavigate, Route, Routes } from 'react-router-dom';
import NavBar from './PortfolioComponents/NavBar';
import AboutMe from './PortfolioComponents/AboutMe';
import HomePageHero from './PortfolioComponents/HomePageHero';
import ProjectCollection from './ProjectComponents/ProjectCollection';
import Footer from './PortfolioComponents/Footer';
import Contact from './PortfolioComponents/Contact';
import HomePage from './PortfolioComponents/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      

      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about_me' element={<AboutMe />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
