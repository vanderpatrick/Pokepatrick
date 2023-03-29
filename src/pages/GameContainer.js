import React from "react";
import { useFetch } from "../hooks/useFetch";
import Enemy from "./Enemy";
import Player from "./Player";
import PlayerAttacks from "./PlayerAttacks";
const GameContainer = () => {
  const { data: enemy } = useFetch("http://localhost:8000/enemy");
  const { data: player } = useFetch("http://localhost:8000/Player")
  return (
    <div className="w-full  h-screen border flex flex-col  justify-center items-center">
      <div className="border w-1/2">
        <div className="mb-24">{enemy && <Enemy enemy={enemy}  />}</div>
        <div className="">
          {player && <Player player={player} />}
          <div className="container border flex flex-wrap">
            {player && <PlayerAttacks player={player} enemy={enemy} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
