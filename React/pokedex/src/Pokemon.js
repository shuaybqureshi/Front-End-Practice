import './App.css';
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function Pokemon() {
    const { id } = useParams();
    console.log(id)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'+id;
    
        // Make a GET request to the API using the fetch function
        fetch(apiUrl)
          .then((response) => {
            // Check if the response status is OK (200)
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            // Parse the response body as JSON
            return response.json();
          })
          .then((data) => {
            // Update the state with the fetched data
            setData(data);
            console.log(data)
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error:', error);
            setIsLoading(false);
          });
      }, []);    return (
    <div className="App">
      <h1>Pokedexxx</h1>
    </div>
  );
}

export default Pokemon;
