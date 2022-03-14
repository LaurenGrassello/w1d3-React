import React, {useEffect, useState} from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);


    const getList =(e)=>{
        e.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>response.json())
        .then(response=>setPokemon(response.results))
    };
    return (
        <div>
        <button onClick={getList} className="btn btn-warning">Catch em' all!</button>
        {pokemon.length > 0 && pokemon.map((pokemons, index)=>{
            return (<div key={index}>{pokemons.name}</div>)
        })}
    </div>
    )
}

export default Pokemon