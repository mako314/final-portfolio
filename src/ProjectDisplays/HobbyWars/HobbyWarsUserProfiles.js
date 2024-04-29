import React from "react";
import HobbyWarsUserProfileImage from '../../Assets/ProjectImages/HobbyWars/HobbyWarsUserProfile.PNG';
import UserProfileChallenges from '../../Assets/ProjectImages/HobbyWars/UserProfileChallenges.PNG';
import UserProfileHobbies from '../../Assets/ProjectImages/HobbyWars/UserProfileHobbies.PNG';

import { ReactComponent as HobbyWarLogo } from '../../Assets/ProjectImages/HobbyWars/Logo/HobbyWarLogo.svg';

function HobbyWarsUserProfile({ openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick }) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-2 md:px-10 md:py-24 lg:py-4">
            <div className="flex items-center gap-4 sm:gap-20">
                {/* Image */}
                <div className="w-full relative group cursor-pointer">
                <img src={HobbyWarsUserProfileImage} alt="Hobby Wars User Profile" className="object-cover w-full h-full" />
                    <div onClick={() => openModal(HobbyWarsUserProfileImage, "Hobby Wars User Profile", "Hobby Wars User Profile")} className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                        <p className="text-white text-xl border p-4 rounded-md">View</p>
                    </div>
                    {selectedImage?.src && (
                        <div id="modal-overlay" className="fixed top-0 left-0 h-full w-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
                            <div className="relative rounded-lg bg-white max-w-7xl max-h-full overflow-auto p-6" onClick={handleModalContentClick}>
                                <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 px-2 py-2 bg-gray-300 rounded hover:bg-red-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </button>
                                <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto mx-auto" />
                                <div className="bg-gray-200 px-4 py-2 rounded-lg"> 
                                    <p className="text-center">{selectedImage.infoText}</p>
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
            <p className="font-bold"><HobbyWarLogo/> Max Adler - </p>
            <p className="text-sm text-[#636262]">TOTALLY Real Human</p>
        </div>

        {/* Right Column for Character Description */}
        <div className="flex-auto" style={{ flexBasis: '85%' }}> {/* Takes up remaining 40% width */}
            <div className="p-4 bg-gray-100 rounded-md shadow">
                <p className="text-center text-[#636262]">
                    Max is really happy that this platform has given him a place to host his challenge and find a community of fellow star gazers.
                </p>
            </div>
        </div>
    </div>
    {/* Container to hold images side by side */}
    <div className="flex">
                <div className="w-1/2 relative group cursor-pointer">
                    <img src={UserProfileChallenges} alt="Hobby Wars User Profile Challenges" className="mt-4 object-cover w-full h-full shadow-lg" />
                    <div onClick={() => openModal(UserProfileChallenges, "Maxs Hosted Challenges", "User Profile Challenges Displayed")} className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                        <p className="text-white text-xl border p-4 rounded-md">View</p>
                    </div>
                </div>
        


        <div className="w-1/2 relative group cursor-pointer">
        <img src={UserProfileHobbies} alt="Hobby Wars User Profile" className="mt-4 mr-2 ml-2 object-fit w-full h-full shadow-lg" />
                    <div onClick={() => openModal(UserProfileHobbies, "Maxs Hobbies & Submissions", "Users Hobbies and Submissions")} className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                        <p className="text-white text-xl border p-4 rounded-md">View</p>
                    </div>
                </div>


    </div>
</div>






        </section>
    );
}

export default HobbyWarsUserProfile;
