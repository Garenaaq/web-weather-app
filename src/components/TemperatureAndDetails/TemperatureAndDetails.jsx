import React from 'react';
import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../../services/weatherService';

const TemperatureAndDetails = ({weather: {description, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone}}) => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p className='capitalize'>{description}</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src={iconUrlFromCode(icon)} className='w-20'/>
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>

            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Ощущается как:
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span> 
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Влажность:
                    <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span> 
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Ветер:
                    <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span> 
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light'>Восход: <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, "HH:mm")}</span></p>
            <p className='font-light'>|</p>

            <UilSunset/>
            <p className='font-light'>Закат: <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, "HH:mm")}</span></p>
            <p className='font-light'>|</p>

            <UilSun/>
            <p className='font-light'>Макс. темп.: <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span></p>
            <p className='font-light'>|</p>

            <UilSun/>
            <p className='font-light'>Мин. темп.: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span></p>
            <p className='font-light'>|</p>
        </div>
    </div>
  );
}

export default TemperatureAndDetails;