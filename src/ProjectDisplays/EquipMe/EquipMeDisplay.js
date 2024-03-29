import React, { useState, useEffect } from "react"
import equipmeHomeImage from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

// Images
import EquipMeMessagingImage from '../../Assets/ProjectImages/EquipMe/EquipMeMessaging/EquipMeUserInbox.PNG'
import EquipMeMessagingOwnerToUserImage from '../../Assets/ProjectImages/EquipMe/EquipMeMessaging/EquipMeOwnerInbox.PNG'
import EquipMeMessagingUserToOwnerImage from '../../Assets/ProjectImages/EquipMe/EquipMeMessaging/EquipMeUserInbox.PNG'
import EquipMeOwnerDashboardImage from '../../Assets/ProjectImages/EquipMe/EquipMeDashboard/EquipMeOwnerDashboard.PNG'


// Individual Display pages as to avoid having a backend / delay
import EquipMeHomePage from "./EquipMeHomePage"
import EquipMeMessagingDisplay from "./EquipMeMessagingComponents/EquipMeMessaging"
import EquipMeMessagingUserToOwner from "./EquipMeMessagingComponents/EquipMeMessagingPartTwo"
import EquipMeMessagingOwnerToUser from "./EquipMeMessagingComponents/EquipMeMessagingPartThree"
import EquipMeOwnerDash from "./EquipMeOwnerDashBoards"

function EquipMeDisplay(){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log(selectedIndex)
    const images = [
      equipmeHomeImage,
      EquipMeMessagingImage,
      EquipMeMessagingOwnerToUserImage,
      EquipMeMessagingUserToOwnerImage,
      EquipMeOwnerDashboardImage
    ]

    const projectDisplayComponents = [
      EquipMeHomePage,
      EquipMeMessagingDisplay,
      EquipMeMessagingUserToOwner,
      EquipMeMessagingOwnerToUser,
      EquipMeOwnerDash
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
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectDisplayComponents.length - 1));
    }
    
      const goToNextPage = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % projectDisplayComponents.length);
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
        <div className="bg-gray-50 mx-auto max-w-7xl px-5 py-16 md:px-10">
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
          setSelectedIndex={setSelectedIndex}
          />
        </div>
    )
}

export default EquipMeDisplay

