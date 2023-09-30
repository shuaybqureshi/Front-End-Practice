import './App.css';
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

function formatNumberWithLeadingZeros(number) {
  const formattedNumber = number.toString().padStart(3, '0');
  return '#'+formattedNumber;
}

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

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
        console.log(data.results)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='container'>
      {isLoading ? (<p>Loading..</p>): 
      (data.results.map((pokemon,index)=>(
        <Link to={`/pokemon/${index+1}`}>
            <div className='card'>
          <span className='pokemon-name'>{pokemon.name}</span>
          <span className='pokemon-idx'>{formatNumberWithLeadingZeros(index+1)}</span>
        </div>
        </Link>
        
      )))
      }
      </div>
    </div>
  );
}

export default Home;
