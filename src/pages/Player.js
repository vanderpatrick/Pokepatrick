import React from 'react'

const Player = ({player}) => {
  return (
    <div>
        <div key={player.name}>
        <p>{player.name}</p>
        <p>{player.LifePoints}</p>
        </div>
    </div>
  )
}

export default Player