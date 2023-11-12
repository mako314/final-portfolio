import React, { useState, useEffect } from "react"
import equipmeHomeImage from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'
import EquipMeMessagingImage from '../../Assets/ProjectImages/EquipMe/EquipMeInternalMessagingSystem.PNG'

//Individual Display pages as to avoid having a backend / delay
import EquipMeTestDisplay from "./EquipMeTestDisplay"
import EquipMeMessagingDisplay from "./EquipMeMessaging"



function EquipMeDisplay(){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log(selectedIndex)
    const images = [
      equipmeHomeImage,
      EquipMeMessagingImage,
    ]

    const projectDisplayComponents = [
      EquipMeTestDisplay,
      EquipMeMessagingDisplay,
    ]

    
    const openModal = (image) => {
        setSelectedImage(image)
    }

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null)
    }

    //Click outside the modal, and you close it
    const handleOverlayClick = (e) => {
      // Only close if the direct parent of the click is the overlay div itself
      if (e.target.id === "modal-overlay") {
          closeModal();
      }
   }
    // Click in Modal and still be inside of it
    const handleModalContentClick = (e) => {
        // Prevent click inside the modal content from closing the modal
        e.stopPropagation();
    }

    const goToPreviousPage = () => {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    }
    
      const goToNextPage = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    useEffect(() => {
        function handleKeyDown(event) {
          if (event.key === 'ArrowLeft') {
            goToPreviousPage();
          } else if (event.key === 'ArrowRight') {
            goToNextPage();
          }
        }
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [isModalOpen, goToPreviousPage, goToNextPage])

    const SelectedComponent = projectDisplayComponents[selectedIndex]
    
    return( 
        <div className="bg-gray-50 mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <SelectedComponent  
          openModal={openModal} 
          goToPreviousPage={goToPreviousPage} 
          goToNextPage={goToNextPage} 
          images={images} 
          selectedImage={selectedImage} 
          selectedIndex={selectedIndex} 
          closeModal={closeModal} 
          handleModalContentClick={handleModalContentClick}
          handleOverlayClick={handleOverlayClick}
          />
        </div>
    )
}

export default EquipMeDisplay

