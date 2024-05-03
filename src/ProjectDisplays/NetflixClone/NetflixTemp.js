import React from "react";
import NotNetflixSeries from "../../Assets/ProjectImages/NetflixClone/NotNetflixTvSeries.PNG";
import NotNetflixView from "../../Assets/ProjectImages/NetflixClone/NotNetflixTvView.PNG";
import NotNetflixContWatching from "../../Assets/ProjectImages/NetflixClone/NotNetflxTvContinueWatchingArthur.PNG";
import NotNetflixInteractiveHover from "../../Assets/ProjectImages/NetflixClone/NotNetflxTvMapped.PNG";
import NotNetflixWatchingArthur from "../../Assets/ProjectImages/NetflixClone/NotNetflxTvWatchingArthur.PNG";




function NetflixTemp({
  openModal, goToPreviousPage, goToNextPage, images, selectedIndex, selectedImage, closeModal, handleModalContentClick, handleOverlayClick
}) {
  return (
    <section class="text-gray-600 body-font">


{selectedImage?.src && (
                <div id="modal-overlay" className="fixed top-0 left-0 h-full w-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
                <div className="relative rounded-lg bg-white max-w-7xl max-h-full overflow-auto p-6" onClick={handleModalContentClick}>
                    <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 px-2 py-2 bg-gray-300 rounded hover:bg-red-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </button>
                    <img src={selectedImage.src} alt="Hobby Wars Leader Boards" className="w-full h-auto mx-auto" />
                    <div className="bg-gray-200 px-4 py-2 rounded-lg"> 
                    <p className="text-center"> {selectedImage.infoText} </p>
                    </div> 
                </div>
                </div>
            )}

    <div class="container px-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-5">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> Definitely Not Netflix</h1>
        <p class="lg:w-full mx-auto leading-relaxed text-base"> Teaming up with a new connection from GrammerHub, we're building a Netflix clone. We've nailed down the app's layout (design is a work in progress) for various devices and added hover states for interactivity. Navigation between Home, Movies, TV Serie, with bookmarking planned. Show search functionality incorporates a search result page, and as a full-stack app, we're developing many more backend features. Plans for an authentication screen are in the pipeline. 
        
        <br/><br/>
        
        Click the cards to expand!
        </p>
      </div>
      <div class="flex flex-wrap -m-4">

        {/* Picture Content Box */}
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative cursor-pointer" onClick={() => openModal(NotNetflixSeries,"Your Favorite Series Mapped", "Tv Series Mapped Not Netflix")}>
            <img alt="Tv Series Mapped Not Netflix" class="absolute inset-0 w-full h-full object-contain object-center" src={NotNetflixSeries}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">TV Series Available</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Please Watch</h1>
              <p class="leading-relaxed">Every watch helps extend our licensing deals. The goal is to work on getting this data cached. Filterable too!</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed italic">Not Netflix Tv Series</p>
        </div>

        {/* Picture Content Box 2*/}
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative cursor-pointer" onClick={() => openModal(NotNetflixView, "Display page for TV Series", "Not Netflix Tv Series Display Page")}>
            <img alt="Not Netflix Tv Series Display Page" class="absolute inset-0 w-full h-full object-contain object-center" src={NotNetflixView}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Tv Series Display Page</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Big Arthur Fans</h1>
              <p class="leading-relaxed">This was an amazing learning experience with AWS S3 buckets and using buckets to host media!</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed italic">Not Netflix Tv Series Display Page</p>
        </div>

        {/* Picture Content Box 3*/}
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative cursor-pointer" onClick={() => openModal(NotNetflixContWatching,"Keep watching after stepping away!", "Not Netflix Continue Watching")}>
            <img alt="Not Netflix Continue Watching" class="absolute inset-0 w-full h-full object-contain object-center" src={NotNetflixContWatching}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Continue Where you Left Off! </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">If we finished user login that is</h1>
              <p class="leading-relaxed">Awesome feature that tests many things, lot of flags. Capturing timestamps and using Video Embed element!</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed italic">Not Netflix Continue Watching</p>
        </div>

        
        <div className="flex justify-center"> 

        {/* Left arrow */}
        <button
        onClick={goToPreviousPage}
        aria-label="Previous"
        className='mr-5'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </button>
      {/* Picture Content Box 4*/}
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative cursor-pointer" onClick={() => openModal(NotNetflixInteractiveHover,"When a card is hovered, House Season 1 plays", "Interactively Hover Cards for Trailers")}>
            <img alt="Interactively Hover Cards for Trailers" class="absolute inset-0 w-full h-full object-contain object-center" src={NotNetflixInteractiveHover}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Interactive Hover States</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Enjoy House Season 1 trailers.</h1>
              <p class="leading-relaxed"> Took advantage of Youtube embeds, mute enabled by default to save users experience!</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed italic">Not Netflix Interactive Hover</p>
        </div>

        {/* Picture Content Box 5*/}
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative cursor-pointer" onClick={() => openModal(NotNetflixWatchingArthur,"Enjoy season 1 of Arthur! Please don't sue me this was practice. I'll react like the image above.", "Not Netflix Watching Arthur")}>
            <img alt="Not Netflix Watching Arthur" class="absolute inset-0 w-full h-full object-contain object-center" src={NotNetflixWatchingArthur}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Yes one can actually watch Arthur!</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">All of Season 1 available</h1>
              <p class="leading-relaxed">Although we don't currently support user login, we track watch history and have crazy content uptime!.</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed italic">Not Netflix Watch your Favorites!</p>
        </div>

                        {/* Right arrow */}
                        <button
                  onClick={goToNextPage}
                  aria-label="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                </button>


        </div>

      </div>
    </div>
    <a href="/projects" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Back to Projects</button>
                        
    </a>
  </section>
  );
}

export default NetflixTemp;
