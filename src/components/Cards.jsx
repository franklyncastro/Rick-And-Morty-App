import Card from "./Card";
import style from './Cards.module.css';
import React from 'react';

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {
        characters.map((character)=>  

        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => onClose(character.id)}
        />
        
        )
      }
    </div>
  );
}
