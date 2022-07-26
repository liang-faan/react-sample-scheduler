import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './scheduler'
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Grid xl={6}>
        <Demo />
      </Grid>
    </div>
  );
}

export default App;
