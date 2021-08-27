import React from "react";
import {Link} from 'react-router-dom';

export default function Character({ character }) {
  return (
    <div className="character-card">
      <div className="character-img-container">
        <img src={character.image} alt={character.name} />
      </div>

      <h1 className="character-name">{character.name}</h1>
      <div className="character-details">
        <div className="character-gender"><span>Gender</span> {character.gender}</div>
        <div className="character-type"><span>Type</span> {character.type}</div>
        <div className="character-status"><span>Status</span> {character.status}</div>
        <div className="character-location"><span>Location</span> {character.location.name}</div>
      </div>
      <div class="character-link">
          <Link
            to={`/character/${character.id}`}>
              Details
          </Link>
      </div>
    </div>
  );
}