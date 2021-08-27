import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import CharacterDetails from "../../components/Character/CharacterDetail.js";




const CharacterPage = () => {
  let params = useParams();
  const url = `https://rickandmortyapi.com/api/character/${ params.id }`;
  const [CharacterDetail, SetCharacterDetail] = useState([]);

  useEffect(() => {
    if(CharacterDetail.length === 0){
      axios
      .get(url)
      .then(response => {
        SetCharacterDetail(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  });

  return (
      <div>
        <div className="character-link">
          <Link
            to= '/'>
              	&lt; Back
          </Link>

        </div>
        <CharacterDetails character={ CharacterDetail } />
      </div>
  )
}

export default CharacterPage