import React from 'react';
import Input from './features/Input'
import ListFilms from './features/ListFilms'
import './App.css';


function App() {
  return (
    <div className="App">
   <h1>MovieMatch</h1>
      <p>OMDb гланый API</p>
      <Input />
      <ListFilms />
    </div>
  );
}

export default App;
