import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import AboutMe from "./AboutMe";
import HomePageHero from './HomePageHero';
import ProjectCollection from '../ProjectComponents/ProjectCollection';
import Contact from './Contact';

function HomePage(){
    return(
        <>
        <HomePageHero/>
        <ProjectCollection/>
        <Contact/>
        </>
    )
}

export default HomePage;