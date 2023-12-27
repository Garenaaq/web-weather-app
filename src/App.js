import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import CityButtons from './components/CityButtons/CityButtons';
import Input from './components/Input/Input';
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails/TemperatureAndDetails';
import Forecast from './components/Forecast/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState({q: 'Москва'});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then(data => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-10 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <CityButtons setQuery={setQuery}/>
      <Input setQuery={setQuery}/>
      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>
          {/* <Forecast title={'Почасовой прогноз'}/> */}
          {/* <Forecast title={'Ежедневный прогноз'}/> */}
        </div>
      )}
    </div>
  );
}

export default App;
