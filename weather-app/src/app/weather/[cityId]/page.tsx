import { WeatherDataType } from '@/app/weatherData.type'
import Image from 'next/image'
import UnknownWeather from '../../../../public/unknown-weather.svg'
const fetchData = async () => {
	const API_KEY: string = '485589c5ce3b49e2a1d182121242805'
	const URL: string = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Kyiv&days=7&aqi=yes&alerts=no`
	const resp = await fetch(URL)
	const data: WeatherDataType = await resp.json()
	return data
}
export default async function City({
	params,
}: {
	params: Promise<{ cityId: string }>
}) {
	const { cityId } = await params
	const data = await fetchData()
	console.log(data)
	return (
		<div className='p-5 h-full  flex gap-5 flex-col'>
			<div className='flex'>
				<div className='flex flex-col items-center w-max flex-auto '>
					<h1 className='text-3xl'>{cityId}</h1>
					<div className='flex flex-col items-center '>
						<Image
							src={`https:${data.current.condition.icon || UnknownWeather}`}
							alt={data.current.condition.text}
							width={300}
							height={300}
						/>
						<h1 className='text-xl'>{data.current.condition.text}</h1>
					</div>
				</div>
				<aside className='w-2xs p-2 flex flex-col h-max'>
					<h1 className='text-3xl font-bold '>Weather Condition </h1>
					<div className='text-xl'>
						<div>Temp: {Math.floor(data.current.temp_c)}°</div>
						<div>Feels Like: {Math.floor(data.current.feelslike_c)}°</div>
						<div>Humidity: {data.current.humidity}%</div>
						<div>Precip: {data.current.precip_mm}mm</div>
						<div>Wind Speed: {data.current.wind_kph}km/h</div>
						<div>Wind Gust: {data.current.gust_kph}km/h</div>
						<div>Wind Direction: {data.current.wind_dir}</div>
						<div>Wind Chill: {data.current.wind_kph}°</div>
						<div>UV Index: {data.current.uv}</div>
						<div>Visibility: {data.current.vis_km}km</div>
						<div>Sunset: {data.forecast.forecastday[0].astro.sunset}</div>
						<div>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</div>
					</div>
				</aside>
			</div>
			<div className='flex flex-row items-center justify-center'>
				{data.forecast.forecastday[0].hour.map((hour, key) => (
					<div key={key} className='flex flex-col items-center m-1'>
						<h1>{hour.time.slice(10)}</h1>
						<Image
							src={`http:${hour.condition.icon}`}
							alt={hour.condition.text}
							width={48}
							height={48}
						/>
						<h1>{Math.floor(hour.temp_c)}°</h1>
					</div>
				))}
			</div>
		</div>
	)
}
