import React from "react";

const testStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

export default function Index({ pokemon }) {
    return (
        <div>
            <ul style={testStyle}>
                {pokemon.map((item, index) => (
                    <li key={index}>
                        <a href={`/pokemon/${index}`}><button>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</button></a>
                    </li>
                ))}
            </ul>
        </div>
    );
} 