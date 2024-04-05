import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const selectCharacterAndPlay = (character) => {
    hideModal(); // Close modal upon selection
    navigate("/play", { state: { character } });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Welcome to the Roots to Grow Game 🎮
      </h1>
      <button
        onClick={showModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Game
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Select Your Character
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Choose your character to start the game.
                </p>
                <div className="flex justify-around mt-4">
                  {/* Each character selection now uses a button to call selectCharacterAndPlay */}
                  <button onClick={() => selectCharacterAndPlay('Farmer')} className="text-center text-xs">
                    <div className="mb-2">👨‍🌾</div>
                    Farmer
                  </button>
                  <button onClick={() => selectCharacterAndPlay('Carpenter')} className="text-center text-xs">
                    <div className="mb-2">👷</div>
                    Carpenter
                  </button>
                  <button onClick={() => selectCharacterAndPlay('Butcher')} className="text-center text-xs">
                    <div className="mb-2">🍖</div>
                    Butcher
                  </button>
                  <button onClick={() => selectCharacterAndPlay('Mechanic')} className="text-center text-xs">
                    <div className="mb-2">🔧</div>
                    Mechanic
                  </button>
                </div>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={hideModal}
                  className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
