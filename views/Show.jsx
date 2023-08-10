import React from 'react';

const testStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

export default function Index({ pokemon, index }) {
let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    return (
        <div style={testStyle}>
            <h1>"Gotta Catch 'Em All"</h1>
            <h2>{name}</h2>
            <img src={`${pokemon.img}.jpg`} alt="picture of pokemon" />
            <br />
            <a href={`/pokemon`}><button>Pokemon List</button></a>
        </div>
    );
}