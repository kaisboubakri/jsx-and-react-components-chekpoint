// src/App.js
import React from 'react';
import Name from "./components/name";
import Price from "./components/price";
import Description from "./components/description";
import Image from "./components/image";

const firstName = "Kais";
function App() {
  return (
    <>
    <div className='card' style={{width: '18rem', backgroundColor: 'black'}}>
        <Image />
      <div className='card-body' style={{color: 'white'}}>
          <Name />
          <Price />
          <Description />
    </div>
    </div>
    <div> <p>Hello, {firstName || "there"}!</p></div>
    </>
    //this is our card
  );
}

export default App;

