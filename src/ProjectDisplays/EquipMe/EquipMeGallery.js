// import React, { useState } from 'react';
// import equipMeHome from '../../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

// function EquipMeGallery() {
//   const [selectedImage, setSelectedImage] = useState(null)

//   const openModal = (image) => {
//     setSelectedImage(image)
//   }

//   // Function to close the modal
//   const closeModal = () => {
//     setSelectedImage(null)
//   }

//   return (
//     <div>
//       {/* Image thumbnails */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Replace the src with your actual image paths */}
//         <img
//           src={equipMeHome} // The thumbnail image path
//           alt="Description"
//           className="w-full object-cover cursor-pointer"
//           onClick={() => openModal("path-to-your-full-size-image")}
//         />
//         {/* Add more images as needed */}
//       </div>

//       {/* Full-size image modal */}
//       {selectedImage && (
//         <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-4 max-w-2xl max-h-full overflow-auto">
//             <img
//               src={equipMeHome} // The full-size image path
//               alt="EquipMe home page enlarged"
//               className="w-full h-auto"
//             />
//             <button
//               onClick={closeModal}
//               className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default EquipMeGallery;