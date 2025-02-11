import { useEffect, useState } from "react";
import "./forecast.css"
import SkeletonLoading from "./skeleton/SkeletonLoading";

const Forecast = () => {
    const [search, setSearch] = useState('London');
    const [result, setResult] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    

    useEffect(() => {
      setLoading(true)
        let timeout = setTimeout(() => {
          fetchData();
        },3000);

        return () => clearTimeout(timeout);

    },[search])

    const fetchData = () => {
                fetch( `${import.meta.env.VITE_WEATHER_API_BASE_URL}/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${search}&days=6&aqi=no&alerts=no`)
                    .then(response => response.json())
                    .then(data => {
                      setError(null)
                      if(data.error) {
                        setError(data.error);
                      } else {
                        setResult(data)
                      }
                      // console.log('thid id data', error.message || data)
                      setLoading(false);
                      // setError(null);
                    })
                    .catch(err => {
                      setError(err);
                      console.log(err)
                    })
            
        };
  return (
    <div className="app-container" >
      <div className="section">
        <h1>WEATHER FORECAST APP</h1>
        <div className="search">
          <input type="text" value={search} onChange={handleChange}/>
          {/* <button className="btn">search</button> */}
        </div>
        
            {loading  &&   <SkeletonLoading /> }
            {!loading  && error && <p className="result">{error.message}</p>}
            {!loading && !error &&
            <>
              <div className="time-details">
                <p>{new Date(result?.location?.localtime).toLocaleString()}</p>
                <p>LAST UPDATED AT : {new Date(result?.current?.last_updated).toLocaleTimeString()}</p>
              </div>
              <div className="result">
                <div className="condition-container">
                        <img   
                            src={result.current.condition.icon} 
                            alt={result.current.condition.text} 
                        />
                    <p>{result.current.temp_c} °C</p>
                    <p>{result.current.condition.text}</p>
                </div>
                <div className="location-details">
                    <p>{result.location.name}</p>
                    <p>{result.location.region}</p>
                    <p>{result.location.country}</p>
                </div>
              </div> 
              <div className="forecast">
                  {!loading && result?.forecast?.forecastday?.map((item) => {
                    return <div key={item.date} className="forecast-cards">
                              <p>{new Date(item.date).toDateString()}</p>
                              <img   
                                    src={item.day.condition.icon} 
                                    alt={item.day.condition.text} 
                              />
                              <p>MAX  {item.day.maxtemp_c}°C</p>
                              <p>MIN  {item.day.mintemp_c}°C</p>
                              <p>{item.day.condition.text}</p>
                          </div>
                  })}
              </div> 
            </>
            } 
      </div>
    </div>
  )
}

export default Forecast;