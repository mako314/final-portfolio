import React, { useState } from 'react';
import EquipMeMessagingImage from '../../Assets/ProjectImages/EquipMe/EquipMeInternalMessagingSystem.PNG'
import equipmeHome from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

function EquipMeMessagingDisplay({openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick, isModalOpen}) {



  return (
    <section>
  
    <div class="mx-auto w-full max-w-7xl px-5 md:px-10">
      
      <h2 class="mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl">Make every step user-centric</h2>
      
      <div class="flex flex-col gap-8 lg:flex-row lg:gap-20">
      <div className="relative group cursor-pointer">
      
      <img alt="Equip Me Messaging System" src={EquipMeMessagingImage} class="inline-block h-full max-h-[428px] w-full max-w-md object-fill lg:max-w-2xl" />
      
      <div className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity"> 
            <p className="text-white text-xl border p-4 rounded-md">   View    </p>
      </div>
      </div>

        <div class="flex flex-col gap-4">
          <span class="flex max-w-sm rounded-md p-4 text-[#222222] [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]" href="#w-tabs-1-data-w-pane-0">
            <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" class="w-13 inline-block" />
            <div class="ml-4 flex flex-col">
              <p class="font-semibold">Flexibility</p>
              <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
            </div>
          </span>
          <span class="flex max-w-sm rounded-md p-4 text-[#222222] border-l-4 border-black [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]" href="#w-tabs-1-data-w-pane-1">
            <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" class="w-13 inline-block" />
            <div class="ml-4 flex flex-col">
              <p class="font-semibold">Scale</p>
              <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
            </div>
          </span>
          <span class="flex max-w-sm rounded-md p-4 text-[#222222] [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]" href="#w-tabs-1-data-w-pane-2">
            <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" class="w-13 inline-block" />
            <div class="ml-4 flex flex-col">
              <p class="font-semibold">Support</p>
              <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
            </div>
          </span>
        </div>

        
      </div>
    </div>
  </section>
  )
}

export default EquipMeMessagingDisplay;