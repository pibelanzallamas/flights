import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [flights, setFlights] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
    params: {
      query: "new",
      locale: "en-US",
    },
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  const lowkey = async () => {
    try {
      const response = await axios.request(options);
      setFlights(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Google Flight</h1>
    </>
  );
}

export default App;
