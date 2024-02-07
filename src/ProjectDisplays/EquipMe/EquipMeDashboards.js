import React from 'react';
import equipmeHome from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

function EquipMeTestDisplay({openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick}) {

  return (
    
<header>
  <div class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <div class="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
      <h1 class="mb-4 text-4xl font-bold md:text-6xl">The Website You Want Without The Dev Time.</h1>
      <p class="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-6 lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
      <div class="flex items-stretch justify-center">
        <a href="#" class="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8">Get Started</a>
        <a href="#" class="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg" alt="" class="mr-2 inline-block max-h-4 w-5" />
          <p class="text-sm text-black sm:text-base">Watch Demo</p>
        </a>
      </div>
    </div>
    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg" alt="" class="inline-block max-h-[512px] w-full object-cover" />
  </div>
</header>
  )
}

export default EquipMeTestDisplay;