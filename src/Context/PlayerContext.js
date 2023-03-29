import { createContext, useState } from "react";
import React from "react";
import useFetch from "../hooks/useFetch";
const PlayerContext = () => {
  const [enemyHP, SetEnemyHP] = useState(enemy.lifePoints);
  const { data: enemy } = useFetch("http://localhost:8000/enemy");
  const EnemyHPContext = createContext(enemyHP);

  return <div>PlayerContext</div>;
};

export default PlayerContext;
