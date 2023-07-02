
import axios from "axios"
import { useState } from "react"

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c6aea05284b5751879f1f6303012ac54`



  const searchValue = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })

      setLocation('')
    }
  }
  return (
    <div className="app">
      <div className="search-button">
        <input
          onKeyDown={searchValue}
          onChange={event => setLocation(event.target.value)}
          value={location}
          type="text" />
      </div>
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
