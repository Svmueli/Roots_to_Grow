import React from "react";
import { Link } from "react-router-dom"; // Corrected import

export default function Welcome() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to the Roots to Grow Game 🎮</h1>
            <Link to="/play-game" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Game
            </Link>
        </div>
    );
}
