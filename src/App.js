import{useState, useEffect, useCallback} from "react";
import './App.css';

function App() {

//logika 

 
  return (
    <div className="">
      <p>{godina}</p>
      <button onClick={() => {
         setGodina(godina + 1);
         console.log(godina)
}}
        >Dodaj broj</button>
        <p>{klik}</p>
        <button onClick={() =>{ setKlik(klik + 1) }}
        >Dodaj klik</button>
    </div>
  );
}

export default App;
