import React, { useState } from 'react';
import EquipMeMessagingImage from '../../Assets/ProjectImages/EquipMe/EquipMeInternalMessagingSystem.PNG'
import equipmeHome from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

function EquipMeMessagingDisplay({openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick, isModalOpen}) {

  // I was coding on my laptop and ended up on main :()

  return (
    <section>
  
    <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
      
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl">From Scratch to Success: <br></br> No Add-ons, Just Connection.</h2>
      
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
      <div className="relative group cursor-pointer">
      
      <img alt="Equip Me Messaging System" src={EquipMeMessagingImage} className="inline-block h-full max-h-[428px] w-full max-w-md object-fill lg:max-w-2xl" />

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
                src={images[selectedIndex]} // The full-size image path
                alt="EquipMe home page enlarged"
                className="w-full h-auto mx-auto"
                />
                <div className="bg-gray-200 px-4 py-2 rounded-lg"> 
                <p className="text-center"> EquipMe Messaging System </p>
                </div> 
              </div>
            </div>
            )}

        <div className="flex flex-col gap-4">
          <span className="flex max-w-sm rounded-md p-4 text-[#222222] border-l-4 border-black [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]" href="#w-tabs-1-data-w-pane-0">
            <img
              src="https://static.thenounproject.com/png/877495-200.png"
              alt=""
              className="object-contain w-16 h-16"
            />
            <div className="ml-4 flex flex-col">
              <p className="font-semibold">Get In Touch</p>
              <p className="text-sm text-[#636262]"> Get connected with equipment owners and users with few clicks. Private messaging, soon to be hosted on AWS.</p>
            </div>
          </span>
          <span className="flex max-w-sm rounded-md p-4 text-[#222222]  [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]" href="#w-tabs-1-data-w-pane-1">
            <img alt="" src="https://cdni.iconscout.com/illustration/premium/thumb/agreement-9843440-8036146.png" className="object-contain w-16 h-16" />
            <div className="ml-4 flex flex-col">
              <p className="font-semibold">User To Owner</p>
              <p className="text-sm text-[#636262]"> Whether you're ready to rent or just browsing, be in touch with the owners every step of the way.</p>
            </div>
          </span>
          <span className="flex max-w-sm rounded-md p-4 text-[#222222] [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]" href="#w-tabs-1-data-w-pane-2">
            <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" className="w-13 inline-block" />
            <div className="ml-4 flex flex-col">
              <p className="font-semibold">Owner To User</p>
              <p className="text-sm text-[#636262]"> Your assets, their adventures. List with ease, connect instantly, and engage seamlessly.</p>
            </div>
          </span>
        </div>

        
      </div>
    </div>
  </section>
  )
}

export default EquipMeMessagingDisplay;