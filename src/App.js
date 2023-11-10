import './App.css';
import { useNavigate, Route, Routes } from 'react-router-dom';

//Main Page Imports
import NavBar from './PortfolioComponents/NavBar';
import HomePage from './PortfolioComponents/HomePage';
import Footer from './PortfolioComponents/Footer';

//Route Imports
import AboutMe from './PortfolioComponents/AboutMe';
import ProjectCollection from './ProjectComponents/ProjectCollection';
import Contact from './PortfolioComponents/Contact';

import EquipMeDisplay from './ProjectDisplays/EquipMeDisplay';

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

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
