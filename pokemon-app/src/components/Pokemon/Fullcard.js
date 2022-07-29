import React from 'react'
import './fullcard.css'
import {FiRefreshCcw} from 'react-icons/fi'

const Fullcard = ({pokemon}) => {
  console.log(pokemon)
  const pokemonPic = `pokemon/${pokemon.num}.png`
  return (
    <div className='full-card-container'>
      <FiRefreshCcw className='refresh-icon' onClick={() => {window.location.reload()}} />
      <div className='full-card-header'>
        <img src={pokemonPic} alt='pkmn' />
        <h2>#{pokemon.num} | {pokemon.name}</h2>
        <h3>Type: {pokemon.type1} {pokemon.type2} </h3>
      </div>
      <div className='pkmn-stats'>
        <table className='stats-table' white="blue" cellPadding="15">
          <tr>
            <th>HP</th>
            <th>Attack</th>
            <th>Spc. Attack</th>
            <th>Spc. Defense</th>
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
        </table>
      </div>
    </div>
  )
}

export default Fullcard