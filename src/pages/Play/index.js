import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import baobabTreeImage from "../../assets/images/bao.webp";

const PlayGame = () => {
  const location = useLocation();
  const { character } = location.state || {
    character: "No character selected",
  };

  // Array of unique icons for each oval
  const icons = ["⚔️", "💰", "🛡️", "🔮", "🧙‍♂️", "🧝‍♀️", "🐉", "🏹", "👑", "🌟"];

  // State to manage dice value and rolling animation
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [showDiceNumber, setShowDiceNumber] = useState(false); // State to show dice number box

  // Event handler for the "Play" button
  const handlePlay = () => {
    // Start rolling animation
    setRolling(true);

    // Simulate dice rolling
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1; // Random dice value between 1 and 6
      setDiceValue(newValue);
      setShowDiceNumber(true); // Show dice number box
      setRolling(false); // Stop rolling animation
    }, 1000); // Simulate rolling for 1 second
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
                {icons[index % icons.length]} {/* Use index to select icon from array */}
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
          {/* Dice at the center of the circle shape with rolling animation */}
          <div
            className={`bg-white/70 flex justify-center items-center w-24 h-24 absolute transition-transform ${
              rolling ? "animate-spin" : ""
            }`}
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${(diceValue - 1) * 45}deg)`,
              background: "transparent", // Set background to transparent
            }}
          >
            🎲
          </div>
          {/* Box to display rolled dice number */}
          {showDiceNumber && (
            <div className="bg-white p-2 rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 mt-10">
              <span className="text-xl">{diceValue}</span>
            </div>
          )}
          {/* Button inside the box, below the dice */}
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-4 left-1/2 transform -translate-x-1/2"
            onClick={handlePlay}
            disabled={rolling} // Disable button during animation
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
