import React, { Component } from 'react';

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};


export default function Index({ pokemon }) {
    return (
        <>
                <ul style={myStyle}>
                {pokemon.map((item) => {
                return (
                <li>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </li>
                )
                })}
            </ul>
        </>
    )
}