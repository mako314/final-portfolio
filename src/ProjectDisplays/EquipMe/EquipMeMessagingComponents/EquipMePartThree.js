import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import EquipMeRentalMonitor from '../../../Assets/ProjectImages/EquipMe/EquipMeDashboard/EquipMeRentalAgreementsAll.PNG'
import { ThemeContext } from '../../../PortfolioComponents/ThemeContext';

function EquipMeMessagingUserToOwner({openModal, goToPreviousPage, goToNextPage, selectedImage, closeModal, handleModalContentClick, handleOverlayClick, setSelectedIndex}) {

  console.log("You're in Part 2")

  const changeIndex = (newIndex) => {
    
    setSelectedIndex(newIndex);
  }

  const {theme} = useContext(ThemeContext);

  return (
    <section>
  
    <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
      
    <h2 className={`text-${theme === 'dark' ? 'white' : 'black'} mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl`}>Effortless Rental Management, All in One Place</h2>
      
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
      <div className="relative group cursor-pointer">
      
      <img alt="Equip Me Owner Rental Monitor" src={EquipMeRentalMonitor} className="inline-block h-full max-h-[428px] w-full max-w-md object-fill rounded-xl lg:max-w-2xl" />
      
      <div onClick={() => openModal(EquipMeRentalMonitor, "EquipMe Owner Rental Tracking", "Equip Me Owner Rental Monitor")} className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity"> 
            <p className="text-white text-xl border p-4 rounded-md">   View    </p>
      </div>
      </div>

      {selectedImage?.src && (
                <div id="modal-overlay" className="fixed top-0 left-0 h-full w-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
                <div className={`relative rounded-lg bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} max-w-7xl max-h-full p-6`} onClick={handleModalContentClick}>
                    <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 px-2 py-2 bg-gray-300 rounded hover:bg-red-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </button>
                    <img src={selectedImage.src} alt={selectedImage.altText} className="w-full h-auto mx-auto" />
                    <div className={`bg-${theme === 'dark' ? 'gray-300' : 'gray-200'}  mt-2 px-4 py-2 rounded-lg`}> 
                    <p className="text-center"> {selectedImage.infoText} </p>
                    </div> 
                </div>
                </div>
            )}

        <div className="flex flex-col gap-4">
          <span className="flex max-w-sm rounded-md p-4 text-[#222222]  [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] cursor-pointer" onClick={() => changeIndex(1)}>
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx7DSg4nCl19gISVmRKabAjuby1wzdjG85rZzqdnn5g&s"
              alt="Stripe Logo"
              className="object-contain w-12 h-12"
            />
            <div className="ml-4 flex flex-col">
              <p className={`text-${theme === 'dark' ? 'white' : 'gray-800'} font-semibold`}>Get Paid Immediately</p>
              <p className={`text-sm text-${theme === 'dark' ? 'white' : '[#636262]'}`}> Upon sign-up, create a Stripe account or save it for later!</p>
              
              <br/>
              <p className={`text-sm text-${theme === 'dark' ? 'white' : '[#636262]'}`}>*Required to be paid.</p>
            </div>
          </span>
          <span className="flex max-w-sm rounded-md p-4 text-[#222222]  [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]  cursor-pointer" onClick={() => changeIndex(2)}>
            <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/agreement-9843440-8036146.png"
            alt="Two People Connecting" 
            className="object-contain w-16 h-16" 
            />
            <div className="ml-4 flex flex-col">
              <p className={`text-${theme === 'dark' ? 'white' : 'gray-800'} font-semibold`}>Diverse Upload Options for Owners</p>
              <p className={`text-sm text-${theme === 'dark' ? 'white' : '[#636262]'}`}>From CSV to XML and beyond, we've got your uploads covered, ensuring seamless connectivity at every stage.</p>
            </div>
          </span>
          <span className={`flex max-w-sm rounded-md p-4 text-white bg-${theme === 'dark' ? 'gray-700' : 'white'}  border-l-4 border-${theme === 'dark' ? 'blue-500' : 'black'}  shadow-${theme === 'dark' ? '2xl' : 'md'}  cursor-pointer`} onClick={() => changeIndex(3)}>
            <img 
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/construction-tool-rental-2991537-2508877.png"
            alt="Equipment Rental" 
            className="object-contain w-16 h-16" 
            />
          <div className="ml-4 flex flex-col">
            <p className={`text-${theme === 'dark' ? 'white' : 'gray-800'} font-semibold`}>Streamline Your Rental Experience</p>
            <p className={`text-sm text-${theme === 'dark' ? 'white' : 'gray-700'}`}>Effortlessly monitor and manage all your rentals from one convenient location.</p>
          </div>
          </span>
        </div>

        
      </div>
      <div className="flex justify-center items-center mt-8 py-5">
                  {/* Left arrow */}
                  <button
                  onClick={goToPreviousPage}
                  aria-label="Previous"
                  className='mr-5'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill={`${theme === 'dark' ? 'white' : '#34568B'}`} className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                  </svg>
                </button>

                {/* Right arrow */}
                <button
                  onClick={goToNextPage}
                  aria-label="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill={`${theme === 'dark' ? 'white' : '#34568B'}`} className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                </button>
          </div>
    </div>
    <Link to="/projects" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#88BDBC] rounded-lg lg:w-auto hover:bg-[#76a9a3] focus:outline-none ">Back to Projects</button>
                        
    </Link>
  </section>
  )
}

export default EquipMeMessagingUserToOwner;