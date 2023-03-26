import React from "react";
import {useFetch} from "../hooks/useFetch";
import Enemy from "./Enemy";
const GameContainer = () => {
    const { data: enemy } = useFetch("http://localhost:8000/enemy");
    const title = "addsas";
    return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="">
      </div>
        {enemy && <Enemy enemy={enemy} />}
    </div>
  );
};

export default GameContainer;
