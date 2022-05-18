
import React from 'react';
import './App.css';
import SearchPhotos from "./searchPhotos"

import Main from './Main';
function App() {
  return (
    <div className="App">
     
 <div className="container">
        <h1 className="title">Looking for NFT?</h1>
        <SearchPhotos /> 
        <Main/>
        </div>
    </div>
  );
}
export default App;