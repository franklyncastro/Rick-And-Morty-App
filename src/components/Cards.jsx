import Card from "./Card";
import style from './Cards.module.css';

export default function Cards({ characters }) {
  return (
    <div className={style.container}>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
