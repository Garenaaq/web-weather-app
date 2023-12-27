import { DateTime, Zone } from "luxon";

const API_KEY = '661150bb36e772bffc617ee8462acbc4';
const BASE_LINK = 'https://api.openweathermap.org/data/2.5/';

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd MMMM yyyy | Локальное время: HH:mm") => {
        return DateTime.fromSeconds(secs).setLocale('ru').toFormat(format);
    };


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_LINK + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY, lang: 'ru'});

    return fetch(url).then((res) => res.json()).then((data) => data);
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone
    } = data;

    const {description, icon} = weather[0];
    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, description, icon, speed, timezone};
};


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather).catch((message) => console.log('Error 404'));
    return formattedCurrentWeather;
};

const iconUrlFromCode = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;   
};

export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};