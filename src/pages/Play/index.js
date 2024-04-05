import React from "react";
import { useLocation } from "react-router-dom";
import baobabTreeImage from "../../assets/images/bao.webp";

const PlayGame = () => {
  const location = useLocation();
  const { character } = location.state || {
    character: "No character selected",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-2 shadow-lg p-3 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white flex justify-center items-center">
        🎮 Roots To Grow 🕹️
      </h1>
      <p className="text-xl font-medium text-gray-700 mb-2 bg-yellow-100 p-2 rounded shadow flex items-center">
        🧑‍🚀 Selected Character:{" "}
        <span className="font-bold text-gray-800 ml-2">{character} 🌟</span>
      </p>

      <div className="mt-8">
        {/* Outer div with background image and significantly increased size using inline styles */}
        <div
          style={{
            backgroundImage: `url(${baobabTreeImage})`,
            height: "40rem", // Adjust the height as needed
            width: "60rem", // Adjust the width as needed
          }}
          className="border-4 border-gray-800 p-20 rounded-md bg-cover bg-center cursor-pointer"
          onClick={() => alert("Rectangle clicked!")}
        >
          {/* Inner div for potential content */}
          <div className="h-full w-full flex justify-center items-center">
            {/* Content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
