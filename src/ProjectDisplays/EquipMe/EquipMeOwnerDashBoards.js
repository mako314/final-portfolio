import React, {useContext} from "react"
import {Link} from 'react-router-dom';
import EquipMeOwnerDashboardImage from '../../Assets/ProjectImages/EquipMe/EquipMeDashboard/EquipMeOwnerDashboard.PNG'
import { ThemeContext } from '../../PortfolioComponents/ThemeContext';


function EquipMeOwnerDash({openModal, goToPreviousPage, goToNextPage, selectedImage, closeModal, handleModalContentClick, handleOverlayClick}) {

  const {theme} = useContext(ThemeContext);

  return  (
    <>
      <div className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'}`}>
        <div className="container mx-auto px-4 py-8">
        <div className="relative group cursor-pointer"> 

          <img src={EquipMeOwnerDashboardImage} alt="EquipMe Owner Dashboard" className="mx-auto h-auto max-w-full rounded-lg shadow-md" />
          <div onClick={() => openModal(EquipMeOwnerDashboardImage, "EquipMe Owner Dashboard", "EquipMe Owner Dashboard")} className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity"> 
            <p className="text-white text-xl border p-4 rounded-md">   View </p>
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
                    <div className={`bg-${theme === 'dark' ? 'gray-300' : 'gray-200'} mt-2 px-4 py-2 rounded-lg`}> 
                    <p className="text-center"> {selectedImage.infoText} </p>
                    </div> 
                </div>
                </div>
            )}


        </div>
          <h1 className={`text-${theme === 'dark' ? 'white' : 'gray-800'}  text-center text-3xl font-bold mt-4`}>EquipMe Owner Dashboard: Streamline Your Equipment Rental Business</h1>
          <p className={`text-center text-md mt-2 text-${theme === 'dark' ? 'white' : 'gray-700'} `}>
            Discover the ease of managing your equipment rental business with our comprehensive dashboard, designed for efficiency and connectivity.
          </p>
        </div>
        <div className={`text-${theme === 'dark' ? 'white' : 'gray-800'} container mx-auto px-4`}>
          <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
          <ul className="space-y-2">
            <li><strong>Easy Navigation:</strong> User-friendly dashboard for straightforward management.</li>
            <li><strong>Real-Time Data:</strong> Immediate insights into your rental operations.</li>
            <li><strong>Streamlined Management:</strong> Simplify listing and updates with an intuitive interface.</li>
            <li><strong>Performance Analytics:</strong> Make informed decisions with actionable analytics.</li>
            <li><strong>Community Connection:</strong> Strengthen relationships through feedback and interaction.</li>
          </ul>
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
          <Link to="/projects" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#88BDBC] rounded-lg lg:w-auto hover:bg-[#76a9a3] focus:outline-none ">Back to Projects</button>
                        
    </Link>
      </div>
    </>
  )
}

export default EquipMeOwnerDash;