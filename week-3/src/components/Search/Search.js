import React, { useState } from "react";


export default function Search(props) {

  const [filterParameters, setfilterParameters] = useState({});
  
  const handleGenderChange = (event) => { 
     const val = event.target.value;

     if(val){
       setfilterParameters({
         ...filterParameters,
         gender: val
       })
     }
  }

  const handleStatusChange = (event) => { 
    const val = event.target.value;

    if(val){
      setfilterParameters({
        ...filterParameters,
        status: val
      })
    }
  }

  const handleSearch = (event) => {
      event.preventDefault();
      props.onSearch(filterParameters);
  }

  return (
    <div className="top-search">
        <div class="select-container">
            <select
              id="gender-select"
              name="gender-select"
              onChange= { handleGenderChange }
            >
                <option selected disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div class="select-container">
            <select
              id="status-select"
              name="status-select"
              onChange= { handleStatusChange }
            >
                <option selected disabled>Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
            </select>
        </div>

        <button onClick={ handleSearch } class="primary-button">
          Search
        </button> 

    </div>
  );
}