import{useState, useEffect, useCallback} from "react";
import './App.css';

function App() {

//logika 
const [godina, setGodina] = useState(2023);
const [klik, setKlik] = useState(0)

const init = useCallback(() => {
  console.log("compponent init")
}, []);

useEffect(() => {
 init();
}, [init])
 
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
