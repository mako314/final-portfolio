import React, { useState, useEffect, useCallback } from "react"
import equipmeHomeImage from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

// Images
// import EquipMeMessagingImage from '../../Assets/ProjectImages/EquipMe/EquipMeMessaging/EquipMeUserInbox.PNG'
// import EquipMeMessagingOwnerToUserImage from '../../Assets/ProjectImages/EquipMe/EquipMeMessaging/EquipMeOwnerInbox.PNG'
// import EquipMeMessagingUserToOwnerImage from '../../Assets/ProjectImages/EquipMe/EquipMeMessaging/EquipMeUserInbox.PNG'
import HobbyWarsChallenge from '../../Assets/ProjectImages/HobbyWars/HobbyWarsChallenge.PNG'
import HobbyWarsChallengesMapped from '../../Assets/ProjectImages/HobbyWars/HobbyWarsChallengesMapped.PNG'
import HobbyWarsLeaderBoardsImage from '../../Assets/ProjectImages/HobbyWars/HobbyWarsLeaderBoards.PNG'
import HobbyWarsUserProfile from '../../Assets/ProjectImages/HobbyWars/HobbyWarsUserProfile.PNG'



// Individual Display pages as to avoid having a backend / delay
// import EquipMeHomePage from "./EquipMeHomePage"
// import EquipMeMessagingDisplay from "./EquipMeMessagingComponents/EquipMePartOne"
// import EquipMeMessagingUserToOwner from "./EquipMeMessagingComponents/EquipMePartTwo"
// import EquipMeMessagingOwnerToUser from "./EquipMeMessagingComponents/EquipMePartThree"
// import EquipMeOwnerDash from "./EquipMeOwnerDashBoards"
import HobbyWarsCompetition from "./HobbyWarsCompetition"
import HobbyWarsLeaderBoards from "./HobbyWarsLeaderBoards"

function HobbyWarsDisplay(){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log(selectedIndex)
    const images = [
      HobbyWarsChallenge,
      HobbyWarsLeaderBoardsImage,
      HobbyWarsUserProfile,
      HobbyWarsChallengesMapped,
      HobbyWarsChallenge
    ]

    const projectDisplayComponents = [
      HobbyWarsCompetition,
      HobbyWarsLeaderBoards,
      // EquipMeMessagingUserToOwner,
      // EquipMeMessagingOwnerToUser,
      // EquipMeOwnerDash
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

    // https://react.dev/reference/react/useCallback

    // const goToPreviousPage = () => {
    //     setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectDisplayComponents.length - 1));
    // }
    
    //   const goToNextPage = () => {
    //     setSelectedIndex((prevIndex) => (prevIndex + 1) % projectDisplayComponents.length);
    // }

    const goToPreviousPage = useCallback(() => {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectDisplayComponents.length - 1));
  }, [projectDisplayComponents.length]);

  const goToNextPage = useCallback(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % projectDisplayComponents.length);
  }, [projectDisplayComponents.length]);


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

export default HobbyWarsDisplay

