import React from "react";
import NotNetflixMovies from "../../Assets/ProjectImages/NetflixClone/NotNetflixMovies.PNG";

function NetflixMovieCollections() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:w-full w-full lg:pr-10 mb-2 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 text-center">
              Definitely Not Netflix
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-700 text-center">
              Here we offer a collection of movies, something never done before. A whole collection of films? We are also considering branching into "DNN Originals"
              Enjoy your favorite films and shows!
            </p>
          </div>
            <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
              <img
                alt="Netflix movies"
                className="w-full h-full object-cover object-center"
                src={NotNetflixMovies}
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NetflixMovieCollections;
