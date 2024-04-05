import React from 'react';
import { useLocation } from 'react-router-dom';

const PlayGame = () => {
  const location = useLocation();
  const { character } = location.state || { character: 'No character selected' };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Play Game Page</h1>
      <p>Selected Character: {character}</p>
    </div>
  );
};

export default PlayGame;
