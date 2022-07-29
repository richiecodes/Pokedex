import './minicard.css'

export const Minicard = ({pokemon}) => {
  const pokemonPic = `pokemon/${pokemon.num}.png`
  return (
    <div className='mini-card-container'>
      <img src={pokemonPic} alt='pic' className='mini-pkmn-pic'/>
      <p>#. {pokemon.num}</p>
      <h3>{pokemon.name}</h3>
    </div>
  )
}
