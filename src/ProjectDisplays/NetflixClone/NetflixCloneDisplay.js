import React, { useState, useEffect, useCallback } from "react"

// Individual Display pages as to avoid having a backend / delay
// import HobbyWarsCompetition from "./HobbyWarsCompetition"
// import HobbyWarsLeaderBoards from "./HobbyWarsLeaderboards"
// import HobbyWarsUserProfile from "./HobbyWarsUserProfiles"

import NetflixMovieCollections from "./NetflixMovieCollections";
import NetflixTemp from "./NetflixTemp";

function NextflixCloneDisplay(){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState({
      src: null,
      infoText: null,
      altText: null
    })
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log(selectedIndex)

    const projectDisplayComponents = [
      NetflixTemp
      // HobbyWarsCompetition,
      // HobbyWarsLeaderBoards,
      // HobbyWarsUserProfile,
      // EquipMeMessagingOwnerToUser,
      // EquipMeOwnerDash
    ]


    //incorporate alt
    const openModal = (imageSrc, imageAltText) => {
      console.log("THE IMAGE:", imageSrc)
        setSelectedImage({
          src: imageSrc,
          alt: imageAltText
        })
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
      closeModal();
  }, [projectDisplayComponents.length]);

  const goToNextPage = useCallback(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % projectDisplayComponents.length);
      closeModal();
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

export default NextflixCloneDisplay;

