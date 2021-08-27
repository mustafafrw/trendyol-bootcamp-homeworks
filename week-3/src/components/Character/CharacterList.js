import React from "react";
import Character from "./Character";


export default function CharacterList(props) {
    return (
      <section className="character-list">
        {props.characters.map((character, id) => {
          return <div>
              <Character key={id} character={character} />
            </div>;
        })}
      </section>
    );
}
