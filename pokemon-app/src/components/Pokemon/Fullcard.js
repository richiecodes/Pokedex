import React from 'react'
import './fullcard.css'


const Fullcard = ({pokemon}) => {
  console.log(pokemon)
  const pokemonPic = `pokemon/${pokemon.num}.png`
  return (
    <div className='full-card-container'>
      <div className='full-card-header'>
        <img src={pokemonPic} alt='pkmn' />
        <h2>#{pokemon.num} | {pokemon.name}</h2>
        <h3>Type: {pokemon.type1} {pokemon.type2} </h3>
      </div>
      <div className='pkmn-stats'>
        <table className='stats-table' white="blue" cellPadding="15">
          <tbody>
            <tr>
              <th>HP</th>
              <th>Attack</th>
              <th>Spec. Attack</th>
              <th>Spec. Defense</th>
              <th>Speed</th>
              <th>Total</th>
              <th>Legendary</th>
              <th>Generation</th>
            </tr>
            <tr>
              <td>{pokemon.hp}</td>
              <td>{pokemon.att}</td>
              <td>{pokemon.spatk}</td>
              <td>{pokemon.spdef}</td>
              <td>{pokemon.speed}</td>
              <td>{pokemon.total}</td>
              <td>{pokemon.legendary}</td>
              <td>{pokemon.gen}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fullcard