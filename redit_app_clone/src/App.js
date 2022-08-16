import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes == Switch
import Subreddit from './features/Subreddits/Subreddit.jsx';
import Header from './features/Header/Header.jsx';
import styled from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers.js';

function App() {
  const [data, setData] = useState([]);
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/popular.json")
    .then(result => {
      // if (result.status != 200) {
      //   console.log("ERROR: Couldn't fetch!");
      //   return;
      // }
      result.json().then(data => {
        if (data != null) {
          setData(data);
          setSubreddits(data.data.children);
        }
      });
    })
  });

  return (
    <div className="App">
      <Header />
      <Subreddit subreddits={subreddits} />
    </div>
  );
}

export default App;
