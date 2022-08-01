import React, { useState } from 'react'
import Fullcard from '../Pokemon/Fullcard';
import './search.css'

const API_URL = 'http://localhost:8080/pokemon/search/name/'

function Search() {
  const [pokemon, setPokemon] = useState();
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    const res = await fetch(API_URL + query);
    const data = await res.json();

    setPokemon(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    fetchData();
    setQuery('');
  }

  function SearchForm() {
    return (
      <div className='search-wrapper'>
      <form onSubmit={handleSubmit}>
        <label>By Name: </label>
        <input type="text" placeholder='Search Pokémon' value={query} onChange={(e) => setQuery(e.target.value)} autoFocus />
      </form>
    </div>
    )
  }

  if (!pokemon) {
    return <SearchForm />
  } else if (pokemon.num >= 1) {
    return (
      <>
        <SearchForm />
        <Fullcard pokemon={pokemon} />
      </>
    )
  } else {
    return (
      <>
        <SearchForm />
        <h1>Not found :( Try again</h1>
      </>
    )
  }
}

export default Search
