import {useState} from 'react'

const API_URL = 'http://localhost:8080/pokemon/search/name/'

const Search = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});

  const getSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(API_URL + search);
    const data = await response.json();

    setPokemon(data);

    console.log(pokemon);

  }

  return (
    <div>
      <form onSubmit={getSearch}>
        <label>By Name: &nbsp;</label>
        <input type='text' placeholder='Search Pokemon' value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
    </div>
  )
}

export default Search