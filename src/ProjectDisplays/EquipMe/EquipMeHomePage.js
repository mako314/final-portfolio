import React from 'react';
import equipmeHome from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

function EquipMeHomePage({openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick}) {

  return (
    <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">

            <div className="relative group cursor-pointer">
            <img src={equipmeHome} alt="EquipMe home page" className="rounded-xl inline-block h-full w-full max-w-[640px] object-contain" />

            {/* Overlay: hidden by default, shown on hover */}
            <div onClick={openModal} className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
            <p className="text-white text-xl border p-4 rounded-md">   View    </p>
            </div>
            </div>

            {selectedImage && (
            <div id="modal-overlay" className="fixed top-0 left-0 h-full w-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
            <div className=" relative rounded-lg bg-white max-w-4xl max-h-full overflow-auto p-6" onClick={handleModalContentClick}>
            <button
                onClick={closeModal}
                className="absolute top-0 right-0 mt-4 mr-4 px-2 py-2 bg-gray-300 rounded hover:bg-red-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
            </button>
                <img
                src={images[selectedIndex]} // Opted to import the images into an array and have it hardcoded
                alt="EquipMe home page enlarged"
                className="w-full h-auto mx-auto"
                />

                <div className="bg-gray-200 px-4 py-2 rounded-lg"> 
                <p className="text-center"> EquipMe Home Page</p>
                </div>   
                
            </div>
            </div>
            )}
            
            <div className="sm:max-w-sm md:max-w-md lg:max-w-lg">
                <p className="mb-6 max-w-md text-[#636262] md:mb-10 lg:mb-12"> EquipMe was founded with a simple yet powerful idea: to create a platform that connects people who need equipment for various tasks with those who have tools and machinery sitting idle. The inspiration behind EquipMe stemmed from a personal experience – observing a family member frequently seeking equipment rentals and realizing that many people may own valuable tools that often went unused.
                <br></br><br></br>
                Our mission is to make equipment rental more accessible and efficient for everyone. Whether you're a homeowner tackling a DIY project, a professional in need of specialized gear, or someone with tools gathering dust in your garage, EquipMe was built to meet your needs. We believe that by facilitating equipment sharing, we can not only save individuals time and money but also foster a stronger sense of community and collaboration among users.
                </p>
                <p className="font-bold">John Robert</p>
                <p className="text-sm text-[#636262]">Senior Webflow Developer</p>
                <div className="flex justify-between items-center mt-4">
                  {/* Left arrow */}
                  <button
                  onClick={goToPreviousPage}
                  aria-label="Previous"
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
            </div>
            </div>
  )
}

export default EquipMeHomePage;