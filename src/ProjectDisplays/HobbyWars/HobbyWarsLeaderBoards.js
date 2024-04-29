import React from 'react';
import HobbyWarsLeaderBoardsImage from '../../Assets/ProjectImages/HobbyWars/HobbyWarsLeaderBoards.PNG';

function HobbyWarsLeaderBoards(openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick){
    console.log(goToNextPage)
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="title-font sm:text-3xl text-2xl font-medium text-black mb-4 text-center">
                        Real Time Leader Boards
                    </h2>
                    <div className="w-full"> {/* Image takes the full width of its container */}
                        <img alt="Leaderboard display" className="object-cover object-center w-full h-auto" src={HobbyWarsLeaderBoardsImage} />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                  </svg>
                </button>

                {/* Right arrow */}
                <button
                  onClick={goToNextPage}
                  aria-label="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                </button>
          </div>
        </section>
    );
}

export default HobbyWarsLeaderBoards;
