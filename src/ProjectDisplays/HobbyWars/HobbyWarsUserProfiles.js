import React, {useContext} from "react"
import {Link} from 'react-router-dom';
import HobbyWarsUserProfileImage from '../../Assets/ProjectImages/HobbyWars/HobbyWarsUserProfile.PNG';
import UserProfileChallenges from '../../Assets/ProjectImages/HobbyWars/UserProfileChallenges.PNG';
import UserProfileHobbies from '../../Assets/ProjectImages/HobbyWars/UserProfileHobbies.PNG';
import UserReviewEntries from '../../Assets/ProjectImages/HobbyWars/HobbyWarsReviewSubmissions.PNG';
import UserChallengesMapped from '../../Assets/ProjectImages/HobbyWars/HobbyWarsChallengesMapped.PNG';

import { ReactComponent as HobbyWarLogo } from '../../Assets/ProjectImages/HobbyWars/Logo/HobbyWarLogo.svg';

import { ThemeContext } from '../../PortfolioComponents/ThemeContext';


function HobbyWarsUserProfile({ openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <section className="mx-auto max-w-7xl px-5 py-2 md:px-10 md:py-24 lg:py-4">
            <div className="flex items-center gap-4 sm:gap-20">
                {/* Image */}
                <div className="w-full relative group cursor-pointer">
                <img src={HobbyWarsUserProfileImage} alt="Hobby Wars User Profile" className="object-cover w-full h-full" />
                    <div onClick={() => openModal(HobbyWarsUserProfileImage, "Hobby Wars User Profile", "Hobby Wars User Profile")} className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                        <p className="text-white text-xl border p-4 rounded-md">View</p>
                    </div>
                    {selectedImage?.src && (
                <div id="modal-overlay" className="fixed top-0 left-0 h-full w-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
                <div className={`relative rounded-lg bg-${theme === 'dark' ? 'gray-800' : 'white'} dark:bg-gray-800 max-w-7xl max-h-full p-6`} onClick={handleModalContentClick}>
                    <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 px-2 py-2 bg-gray-300 rounded hover:bg-red-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </button>
                    <img src={selectedImage.src} alt={selectedImage.altText} className="w-full h-auto mx-auto" />
                    <div className={`bg-${theme === 'dark' ? 'gray-300' : 'gray-200'} dark:bg-gray-300 mt-2 px-4 py-2 rounded-lg`}> 
                    <p className="text-center"> {selectedImage.infoText} </p>
                    </div> 
                </div>
                </div>
            )}
                </div>
            </div>

{/* Profile Information */}

<div className="w-full lg:w-full mt-4 mb-4 py-4 px-4">
    <div className="flex"> {/* Flex container */}
    {/* Left Column for Profile Name and Role */}
    <div className="flex-initial" style={{ flexBasis: '15%' }}> {/* Takes up 60% width */}
    <p className={`text-${theme === 'dark' ? 'white' : 'black'} dark:text-white font-bold`}><HobbyWarLogo/> Max Adler - </p>
    <p className={`text-sm text-${theme === 'dark' ? 'white' : '[#636262]'} dark:text-white font-bold`}>TOTALLY Real Human</p>
    </div>

        {/* Right Column for Character Description */}
        <div className="flex-auto" style={{ flexBasis: '85%' }}> {/* Takes up remaining 40% width */}
            <div className="p-4 bg-gray-100 rounded-md shadow">
                <p className="text-center text-[#636262]">
                    Max is really happy that this platform has given him a place to host his challenge and find a community of fellow star gazers. I most definitely did not make them up, nor sponsor them for this post.
                </p>
            </div>
        </div>
    </div>

    {/* Container to hold images side by side */}
<div className="flex">
        
        <div className="w-1/2 relative group cursor-pointer ml-4 mr-4 mt-4">
                <img src={UserProfileChallenges} alt="Hobby Wars User Profile Challenges" className="object-cover w-full h-full shadow-lg" />
                <div onClick={() => openModal(UserProfileChallenges, "Maxs Hosted Challenges", "User Profile Challenges Displayed")} className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                <p className="text-white text-xl border p-4 rounded-md">View</p>
            </div>
        </div>
        


        <div className="w-1/2 relative group cursor-pointer ml-4 mr-4 mt-4">
        <img src={UserProfileHobbies} alt="Hobby Wars User Profile" className="object-fit w-full h-full shadow-lg" />
                <div onClick={() => openModal(UserProfileHobbies, "Maxs Hobbies & Submissions", "Users Hobbies and Submissions")} className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                <p className="text-white text-xl border p-4 rounded-md">View</p>
            </div>
        </div>

        <div className="w-1/2 relative group cursor-pointer ml-4 mr-4 mt-4">
                <img src={UserReviewEntries} alt="Hobby Wars User Review Entries" className="object-cover w-full h-full shadow-lg" />
                <div onClick={() => openModal(UserReviewEntries, "Max Reviewing Entries", "User Reviewing Entries")} className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                <p className="text-white text-xl border p-4 rounded-md">View</p>
            </div>
        </div>
        


        <div className="w-1/2 relative group cursor-pointer ml-4 mr-4 mt-4">
        <img src={UserChallengesMapped} alt="Hobby Wars User Profile" className="object-fit w-full h-full shadow-lg" />
                <div onClick={() => openModal(UserChallengesMapped, "Max is Excited About All the Challenges!", "Users Challenge Options")} className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                <p className="text-white text-xl border p-4 rounded-md">View</p>
            </div>
        </div>

</div>


</div>


<div className="flex justify-center items-center mt-8 py-5">
         {/* Left arrow */}
         <button
                  onClick={goToPreviousPage}
                  aria-label="Previous"
                  className='mr-5'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill={`${theme === 'dark' ? 'white' : 'black'}`} className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                  </svg>
                </button>

                {/* Right arrow */}
                <button
                  onClick={goToNextPage}
                  aria-label="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill={`${theme === 'dark' ? 'white' : 'black'}`} className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                </button>
</div>


<Link to="/projects" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#88BDBC] rounded-lg lg:w-auto hover:bg-[#76a9a3] focus:outline-none ">Back to Projects</button>
                        
    </Link>



        </section>
    );
}

export default HobbyWarsUserProfile;
