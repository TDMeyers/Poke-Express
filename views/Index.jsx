import React, { Component } from 'react';

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};


export default function Index({ pokemon }) {
    return (
        <>
                <ul style={myStyle}>
                {pokemon.map((item, index) => {
                return (
                <li>
                    <a href={`/pokemon/${index}`}><button>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</button></a>
                </li>
                )
                })}
            </ul>
        </>
    )
}