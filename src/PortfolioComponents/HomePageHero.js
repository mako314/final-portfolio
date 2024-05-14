import React, {useContext} from 'react';
import HeroImage from "../Assets/PortfolioImages/HeroImage.png"
import { ThemeContext } from './ThemeContext';
import { Link} from 'react-router-dom';



function HomePageHero() {
    const {theme} = useContext(ThemeContext);

    return (
    <div className={`w-full px-6 py-16 mx-auto bg-${theme === 'dark' ? 'gray-800' : 'gray-100'}`}>
        <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl rounded-full" src={HeroImage} alt="Hero"/>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-6">
                <div className="lg:max-w-lg">
                    <h1 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#34568B]'} lg:text-4xl `}>
                        Hello!
                        <br/>
                        My name is Macolister Bispo
                        <br/>
                        <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#88BDBC]'}`}>A Full Stack Developer</span>
                    </h1>
                    
                    <p className={`mt-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Passionate about tech, currently immersed in projects utilizing Next.js, PostgreSQL, AWS, Tailwind, TypeScript, and various APIs.
                    </p>

                    <Link to="/contact" className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#34568B]'} hover:text-[#A7C7E7] transition duration-100 lg:text-xl`}>
                        <button className={`w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-[#88BDBC] hover:bg-[#76a9a3]'} rounded-lg lg:w-auto`}>
                        Get in touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

}

export default HomePageHero;
