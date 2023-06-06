import './App.css';
import { useState } from "react";



const api = {
 key: "440255c0f77f6ed84fe1b80681329955",
 base: "https://api.openweathermap.org/data/2.5/",
};


function App() {
 const [search, setSearch] = useState("");
 const[weather, setWeather] = useState({});


 const searchPressed = () => {
   console.log("Search pressed!");
   fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
   .then(res => res.json())
   .then(result => {
     setWeather(result);


   })
 };


 return (
   <div className="App">
     <header className="App-header">
     <div style={{ 
      backgroundImage: `url("/src/sunrise.jpg")` 
    }}>
      </div>
      
       {/*Title*/}
       
       <h1>Weather App</h1>
      
        {/*Search*/}
        <div>
        <input
        type='text'
        placeholder='Enter city/town..'
        onChange={(e)=> setSearch(e.target.value)}
        />


        <button onClick={searchPressed}>Search</button>
        </div>


        {typeof weather.main !== "undefined" ? (
         <div>
           {/* Location  */}
           <p>{weather.name}</p>


           {/* Temperature Celsius  */}
           <p>{weather.main.temp}°C</p>


           {/* Condition */}
           <p>{weather.weather[0].main}</p>
           <p>({weather.weather[0].description})</p>
         </div>
       ) : (
         ""
       )}
     </header>
   </div>
 );
};


export default App;




