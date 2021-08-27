import React from "react";

export default function Character({ character }) {
  return (
    <div className="character-detail-card">
      <div className="character-img-container">
        <img src={character.image} alt={character.name} />
      </div>

      <h1 className="character-name">{character.name}</h1>
      <div className="character-details">
        <div className="character-gender"><span>Gender</span> {character.gender}</div>
        <div className="character-type"><span>Type</span> {character.type}</div>
        <div className="character-status"><span>Status</span> {character.status}</div>
        <div className="character-location"><span>Location</span> { character.location ? character.location.name : '' }</div>
        <div className="character-url"><span>Url</span> <a href= { character.url } >{ character.url }</a></div>
        <div className="character-created"><span>Created</span> { character.created }</div>
        
          <ul className="character-episodes"><span>Episodes</span>
            {
              character.episode && 
              character.episode.map((episode, id) => {
              return <li key = { episode }>
                <a href={ episode } target="_blank" rel="noreferrer">{ episode }</a>
                </li>
              })
            }
          </ul>
        
      </div>

    </div>
  );
}