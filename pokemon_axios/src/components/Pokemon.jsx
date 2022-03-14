import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);

    const getList=(e)=>{
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
                .then(response=>{setPokemon(response.data.results)})

    };

    return (
        <div>
        <button onClick={getList} className="btn btn-warning">Catch em' all!</button>
        {
            pokemon?
            pokemon.map((character, i)=><ul key={i}>{character.name}</ul>)
            :""
        }
    </div>
    )
}

export default Pokemon