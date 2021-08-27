import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search.js";
import LoadMore from "../../components/Shared/LoadMore.js";
import CharacterList from "../../components/Character/CharacterList.js";
import axios from "axios";

const Characters = () => {

  const [CharacterArr, SetCharacterArr] = useState([]);

  const [info, setInfo] = useState({});

  const [query, SetQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character" + query)
      .then(response => {
        const { info, results } = response.data;

        setInfo(info)

        // check if it is load more action or not
        if(!query.includes("page")){
          SetCharacterArr(results);
        }else{
          SetCharacterArr(
            [...CharacterArr, ...results]
          );
        }

      })
      .catch(err => {
        console.log(err);
      });

  }, [query]);

  const searchAction = (filterParameters) => {
    let newQuery = ""

    if(filterParameters){
      if(filterParameters.status && filterParameters.gender){
        newQuery = `?status=${filterParameters.status }&gender=${filterParameters.gender}`;
      }
      else if(filterParameters.status){
        newQuery = `?status=${filterParameters.status }`;
      }else if(filterParameters.gender){
        newQuery = `?gender=${filterParameters.gender}`;
      }
    }

    if(newQuery && newQuery !== query){
      SetQuery(newQuery);
    }

  };

  const loadMoreAction = (event) => {
     if(info && info.next){
       const newQuery = info.next.replace("https://rickandmortyapi.com/api/character","")
       SetQuery(newQuery)
     }
  }

  return (
      <div>
          <Search 
             onSearch= { searchAction }
          />
          <CharacterList
            characters=
            {CharacterArr}
          />
          <LoadMore 
            isHidden = { !info.next }
            onLoadMore= { loadMoreAction }
          />
      </div>
  )
}

export default Characters