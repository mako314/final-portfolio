import './App.css';
import {Route, Routes } from 'react-router-dom';

//Main Page Imports
import NavBar from './PortfolioComponents/NavBar';
import HomePage from './PortfolioComponents/HomePage';
import Footer from './PortfolioComponents/Footer';

//Route Imports
import AboutMe from './PortfolioComponents/AboutMe';
import ProjectCollection from './ProjectComponents/ProjectCollection';
import Contact from './PortfolioComponents/Contact';

import EquipMeDisplay from './ProjectDisplays/EquipMe/EquipMeDisplay';
import HobbyWarsDisplay from './ProjectDisplays/HobbyWars/HobbyWarsDisplay';
import NextflixCloneDisplay from './ProjectDisplays/NetflixClone/NetflixCloneDisplay';

function App() {
  return (
    <div className="App">
      <NavBar/>
      

      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about_me' element={<AboutMe />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<ProjectCollection />} />

      <Route path='/EquipMe' element={<EquipMeDisplay />} />
      <Route path='/HobbyWars' element={<HobbyWarsDisplay />} />
      <Route path='/NotNetflix' element={<NextflixCloneDisplay />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
