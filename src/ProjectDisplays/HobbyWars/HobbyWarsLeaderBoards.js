import React from 'react';
import HobbyWarsLeaderBoardsImage from '../../Assets/ProjectImages/HobbyWars/HobbyWarsLeaderBoards.PNG';

function HobbyWarsLeaderBoards() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="title-font sm:text-3xl text-2xl font-medium text-black mb-4 text-center">
                        Real Time Leader Boards
                    </h2>
                    <div className="w-full"> {/* Image takes the full width of its container */}
                        <img alt="Leaderboard display" className="object-cover object-center w-full h-auto" src={HobbyWarsLeaderBoardsImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HobbyWarsLeaderBoards;
