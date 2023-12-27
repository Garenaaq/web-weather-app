import React, { useState } from 'react';
import { UilSearch, UilLocationPoint  } from '@iconscout/react-unicons';


const Input = ({setQuery}) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city.trim() !== '') {
      setQuery({q: city});
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat, lon});
      });
    }
  };


  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input placeholder="Поиск..." value={city} onChange={(e) => setCity(e.currentTarget.value)} type='text' className='text-xl font-light p-2 w-full shadow-xl focus: outline-none capitalize'/>
            <UilSearch size={28} onClick={handleSearchClick} className='cursor-pointer text-white transition ease-out hover:scale-125'/>
            <UilLocationPoint size={28} onClick={handleLocationClick} className='cursor-pointer text-white transition ease-out hover:scale-125'/>
        </div>
    </div>
  );
}

export default Input