import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeatherApp from "./pages/WeatherApp";
import { useEffect, useState } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.airvisual.com/v2/nearest_city?key=ef1d39fd-9c33-4af6-b80a-11173678f74c`,
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data.data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home fetchData={weatherData} />} />
        <Route
          path="/weather"
          element={<WeatherApp fetchData={weatherData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
