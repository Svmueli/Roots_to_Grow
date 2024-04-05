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
        🧑‍🚀 Selected Character: <span className="font-bold text-gray-800 ml-2">{character} 🌟</span>
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
          {/* Ovals positioned to suggest a heart shape */}
          <div className="absolute" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="flex justify-center items-end">
              {/* Top Left Oval */}
              <div className="bg-white/70 backdrop-blur-md rounded-full flex justify-center items-center w-16 h-10 m-2">
                ⚔️
              </div>
              {/* Top Right Oval */}
              <div className="bg-white/70 backdrop-blur-md rounded-full flex justify-center items-center w-16 h-10 m-2">
                🛡️
              </div>
            </div>
            {/* Bottom Oval */}
            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-md rounded-full flex justify-center items-center w-16 h-10 m-2">
                💰
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
