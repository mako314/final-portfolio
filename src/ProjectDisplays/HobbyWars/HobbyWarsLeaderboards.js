import React from 'react';
import HobbyWarsLeaderBoardsImage from '../../Assets/ProjectImages/HobbyWars/HobbyWarsLeaderBoards.PNG';

function HobbyWarsLeaderBoards({
  openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick
}) {
  console.log(goToNextPage);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="title-font sm:text-3xl text-2xl font-medium text-black mb-4 text-center">
            Real Time Leaderboards
          </h2>
          <div className="w-full group cursor-pointer"> {/* Parent container for image and overlay */}
            <div className="relative shadow-lg"> {/* This div becomes the relative container */}
              <img alt="Leaderboard display" className="object-cover object-center w-full h-auto" src={HobbyWarsLeaderBoardsImage} />
              <div onClick={() => openModal(HobbyWarsLeaderBoardsImage, "Hobby Wars Leaderboards Page")} className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
                <p className="text-white text-xl border p-4 rounded-md">View</p>
              </div>
            </div>
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
                    <img src={selectedImage.src} alt="Hobby Wars Leader Boards" className="w-full h-auto mx-auto" />
                    <div className="bg-gray-200 px-4 py-2 rounded-lg"> 
                    <p className="text-center"> {selectedImage.infoText} </p>
                    </div> 
                </div>
                </div>
            )}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 py-5">
        {/* Navigation buttons omitted for brevity */}
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