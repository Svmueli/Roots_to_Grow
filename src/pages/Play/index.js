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

      <div className="mt-8 relative">
        <div
          style={{
            backgroundImage: `url(${baobabTreeImage})`,
            height: "40rem",
            width: "60rem",
          }}
          className="border-4 border-gray-800 p-20 rounded-md bg-cover bg-center cursor-pointer relative overflow-hidden flex items-center justify-center"
        >
          {/* Ovals positioned to form a circular shape */}
          <div className="absolute">
            {/* Other ovals forming the circular shape */}
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-full flex justify-center items-center w-12 h-8 absolute"
                style={{
                  transform: `rotate(${(index + 1) * (360 / 9)}deg) translate(10rem) rotate(${-(index + 1) * (360 / 9)}deg)`,
                  top: "50%",
                  left: "50%",
                  marginLeft: "-6px",
                  marginTop: "-4px",
                }}
              >
                {index % 3 === 0 ? "⚔️" : index % 3 === 1 ? "💰" : "🛡️"}
              </div>
            ))}
            <div
              className="bg-white/70 backdrop-blur-md rounded-full flex justify-center items-center w-12 h-8 absolute"
              style={{
                transform: `rotate(${(360 / 9)}deg) translate(10rem) rotate(${-360 / 9}deg)`,
                top: "50%",
                left: "50%",
                marginLeft: "-6px",
                marginTop: "-4px",
              }}
            >
              Start
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
