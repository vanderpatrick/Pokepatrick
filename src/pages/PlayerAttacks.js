import React from "react";
import { useState, useEffect } from "react";
const PlayerAttacks = ({ player, enemy }) => {
  const handleDamage = ({ damage }) => {
    console.log(damage)
  };

  const Attacks = player.attacks.map((attack) => {
    return (
      <button
        key={attack.id}
        className="bg-blue-500 hover:bg-blue-700 gap-4 text-white font-bold  rounded transform transition duration-100 ease-in-out hover:scale-105"
        onClick={() => handleDamage(attack)}
      >
        {attack.name}
      </button>
    );
  });
  return (
    <div className="container">
      <div className="grid gap-1 grid-cols-2">{Attacks}</div>
    </div>
  );
};

export default PlayerAttacks;
