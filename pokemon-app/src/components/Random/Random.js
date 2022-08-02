import {useState, useEffect} from 'react'
import Fullcard from '../Pokemon/Fullcard';
import './random.css'
import {FiRefreshCcw} from 'react-icons/fi'

const API_URL = 'http://localhost:8080/pokemon/random'

const Random = () => {
  const [pokemon, setPokemon] = useState({});
  
  const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setPokemon(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='random-card-container'>
      <FiRefreshCcw className='refresh-icon' onClick={() => {window.location.reload()}} />
      <Fullcard pokemon={pokemon} />
    </div>
  )
}

export default Random