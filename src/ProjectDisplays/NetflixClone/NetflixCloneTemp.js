import React from "react";
import NetflixMovies from "../../Assets/ProjectImages/NetflixClone/NotNetflixMovies.PNG";

function NetflixCloneTemp() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 w-full lg:pr-10 mb-2 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
              Welcome to Your Netflix Clone
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Here you can explore a collection of movies just like on Netflix.
              Enjoy your favorite films and shows!
            </p>
          </div>
            <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
              <img
                alt="Netflix movies"
                className="w-full h-full object-cover object-center"
                src={NetflixMovies}
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NetflixCloneTemp;
