import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import baobabTreeImage from "../../assets/images/bao.webp";

const PlayGame = () => {
  const location = useLocation();
  const { character } = location.state || {
    character: "No character selected",
  };

  const icons = ["⚔️", "💰", "🛡️", "🔮", "🧙‍♂️", "🧝‍♀️", "🐉", "🏹", "👑", "🌟"];

  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [farmerPosition, setFarmerPosition] = useState(-1); // Initial position outside the circle
  const [totalAmount, setTotalAmount] = useState(`37, 0000`);

  const handlePlay = () => {
    setRolling(true);

    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
      setRolling(false);

      const newPosition = (farmerPosition + newValue) % 9;
      setFarmerPosition(newPosition);
    }, 1000);
  };

  // Calculate CSS styles for the farmer icon based on its position
  const getFarmerStyles = () => {
    if (farmerPosition === -1) {
      // Position the farmer outside the circle initially
      return { left: "50%", top: "10%" };
    } else {
      const degrees = (360 / 9) * farmerPosition;
      const radians = (degrees * Math.PI) / 180;
      const radius = 10; // Adjust the radius as needed
      const centerX = 50; // Adjust the center X coordinate as needed
      const centerY = 50; // Adjust the center Y coordinate as needed
      const left = centerX + radius * Math.cos(radians) + "%";
      const top = centerY + radius * Math.sin(radians) + "%";
      return { left, top };
    }
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

      <p className="text-xl font-medium text-gray-700 mt-2">
        Total Amount: {totalAmount} DBS 💰
      </p>

      {/* Box to display the dice value */}
      <div className="mt-4">
        <p className="text-xl font-medium text-gray-700">
          Dice Value: {diceValue}
        </p>
      </div>

      <div className="mt-8 relative">
        <div
          style={{
            backgroundImage: `url(${baobabTreeImage})`,
            height: "40rem",
            width: "60rem",
          }}
          className="border-4 border-gray-800 p-20 rounded-md bg-cover bg-center cursor-pointer relative overflow-hidden flex items-center justify-center"
        >
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
                {icons[index % icons.length]}
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
          {/* Farmer icon */}
          <div
            className="bg-yellow-300 rounded-full flex justify-center items-center w-8 h-8 absolute"
            style={{
              ...getFarmerStyles(),
              transition: "left 1s, top 1s",
            }}
          >
            👨‍🌾
          </div>
          <div
            className={`bg-white/70 flex justify-center items-center w-16 h-16 absolute transition-transform ${
              rolling ? "animate-spin" : ""
            }`}
            style={{
              top: "53%",
              left: "53%",
              transform: `translate(-50%, -50%) rotate(${(diceValue - 1) * 45}deg)`,
              background: "transparent",
            }}
          >
            🎲
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-4 left-1/2 transform -translate-x-1/2"
            onClick={handlePlay}
            disabled={rolling}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
