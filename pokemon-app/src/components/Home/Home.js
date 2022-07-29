import {useEffect, useState} from 'react'
import './home.css'
import { Minicard } from '../Pokemon/Minicard';

const API_URL = 'http://localhost:8080/pokemon/all'

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setAllPokemon(data);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className='all-pokemon-container'>
      {allPokemon.map((p) => (
        <Minicard pokemon={p} />
      ))}
    </div>
  )
}

export default Home