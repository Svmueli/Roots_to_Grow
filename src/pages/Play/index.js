import React from 'react';
import { useLocation } from 'react-router-dom';

const PlayGame = () => {
  const location = useLocation();
  const { character } = location.state || { character: 'No character selected' };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Play Game Page</h1>
      <p>Selected Character: {character}</p>
      <div className="mt-8">
        <div className="border-4 border-gray-800 p-20">
          <div
            className="h-64 w-96 rounded-md bg-[url('https://example.com/baobab-tree.jpg')] bg-cover bg-center cursor-pointer"
            onClick={() => alert('Rectangle clicked!')}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
