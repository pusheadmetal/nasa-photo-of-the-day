import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "./components/Card";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");
  const [hdurl, setHdurl] = useState("");
  const [media_type, setMedia_type] = useState("");
  const [service_version, setService_version] = useState("");
  const [title, setTitle] = useState("");
  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd")
      .then( (response) => {
          setDate(response.data.date);
          setExplanation(response.data.explanation);
          setHdurl(response.data.hdurl);
          setMedia_type(response.data.media_type);
          setService_version(response.data.service_version);
          setTitle(response.data.title);
        })
      .catch( (err) => console.log(err));
  }, [] );
  return (
    <div className="App">
      <div class = "container">
        <div class = "cards">
          <Card getTitle = {title} getImage = {hdurl} getDate = {date} getExplanation = {explanation} getType = {media_type} /> 
        </div>
      </div>
    </div>
  );
}

export default App;
