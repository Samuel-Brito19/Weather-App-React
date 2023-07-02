//import axios from "axios"

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.730610&lon=-73.935242&appid=c6aea05284b5751879f1f6303012ac54`

  return (
    <div className="app">
      <div className="container" >
        <div className="top">
          <div className="location" >
            <p>New York</p>
          </div>
          <div className="temp" >
            <h1>60°F</h1>
          </div>
          <div className="description" >
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom" >
          <div className="fells" >
            <p className="bold" >65°F</p>
            <p>Fells like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="winds">
            <p className="bold">100km</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
