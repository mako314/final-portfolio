import React from "react";
import NotNetflixSeries from "../../Assets/ProjectImages/NetflixClone/NotNetflixTvSeries.PNG";
import NotNetflixView from "../../Assets/ProjectImages/NetflixClone/NotNetflixTvView.PNG";
import NotNetflixContWatching from "../../Assets/ProjectImages/NetflixClone/NotNetflxTvContinueWatchingArthur.PNG";
import NotNetflixInteractiveHover from "../../Assets/ProjectImages/NetflixClone/NotNetflxTvMapped.PNG";




function NetflixTemp() {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> Definitely Not Netflix</h1>
        <p class="lg:w-full mx-auto leading-relaxed text-base"> Teaming up with a new connection from GrammerHub, we're building a Netflix clone. We've nailed down the app's layout (design is a work in progress) for various devices and added hover states for interactivity. Navigation between Home, Movies, TV Serie, with bookmarking planned. Show search functionality incorporates a search result page, and as a full-stack app, we're developing many more backend features. Plans for an authentication screen are in the pipeline.</p>
      </div>
      <div class="flex flex-wrap -m-4">

        {/* Picture Content Box */}
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="Tv Series Mapped Not Netflix" class="absolute inset-0 w-full h-full object-contain object-center" src={NotNetflixSeries}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">TV Series Available</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Please Watch</h1>
              <p class="leading-relaxed">Every watch helps extend our licensing deals. The goal is to work on getting this data cached.</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed">NotNetflix Tv Series</p>
        </div>

        {/* Picture Content Box 2*/}
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-contain object-center" src={NotNetflixView}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Tv Series Display Page</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Big Arthur Fans</h1>
              <p class="leading-relaxed">This was an amazing learning experience with AWS S3 buckets and using buckets to host media!</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed">NotNetflix Tv Series Display Page</p>
        </div>

        {/* Picture Content Box 3*/}
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-contain object-center" src={NotNetflixContWatching}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Continue Where you Left Off! </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">If we finished user login that is</h1>
              <p class="leading-relaxed">Awesome feature that tests many things, lot of flags. Capturing timestamps and using Video Embed element!</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed">NotNetflix Continue Watching</p>
        </div>

        
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={NotNetflixInteractiveHover}/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Interactive Hover States</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">*Most "trailers" are House Season 1 trailers.</h1>
              <p class="leading-relaxed"> Took advantage of Youtube embeds, mute enabled by default to save users experience!</p>
            </div>
          </div>
          <p class="text-center mt-2 leading-relaxed">NotNetflix Interactive Hover</p>
        </div>


        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
              <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>


        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
              <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
  );
}

export default NetflixTemp;
