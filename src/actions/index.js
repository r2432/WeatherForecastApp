import Axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const OPEN_WEATHER_MAP_API_KEY = 'e28bb2f7a8bf39a87c6da96dbf00f02e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}`;

export function fetchWeatherData(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = Axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}