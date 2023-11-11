import React, { useState, useEffect } from "react"
import equipmeHome from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'
import EquipMeGallery from "./EquipMeGallery"

const images = [
    equipmeHome,
    equipmeHome,
    equipmeHome,
    equipmeHome,
  ]

function EquipMeDisplay(){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0);

    
    const openModal = (image) => {
        setSelectedImage(image)
    }

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null)
    }

    const goToPreviousImage = () => {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    }
    
      const goToNextImage = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    useEffect(() => {
        function handleKeyDown(event) {
          if (!isModalOpen) return;
          if (event.key === 'ArrowLeft') {
            goToPreviousImage();
          } else if (event.key === 'ArrowRight') {
            goToNextImage();
          }
        }
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [isModalOpen])


    return(
    <section>
        
        <div className="bg-gray-50 mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">

            <div className="relative group cursor-pointer">
            <img src={equipmeHome} alt="EquipMe home page" className="rounded-xl inline-block h-full w-full max-w-[640px] object-contain" />

            {/* Overlay: hidden by default, shown on hover */}
            <div onClick={openModal} className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
            <p className="text-white text-xl border p-4 rounded-md">   View    </p>
            </div>
            </div>

            {selectedImage && (
            <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50">
            <div className=" relative rounded-lg bg-white p-4 max-w-2xl max-h-full overflow-auto">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            
            <button
                onClick={closeModal}
                className="absolute top-4 right-4mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700"
                >
                Close
            </button>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>

                <img
                src={equipmeHome} // The full-size image path
                alt="EquipMe home page enlarged"
                className="w-full h-auto"
                />
                <p className="text-center"> EquipMe Home Page</p>
                
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
            </div>
            </div>
        </div>
    </section>
    )
}

export default EquipMeDisplay

