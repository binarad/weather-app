'use client'
import { useParams } from 'next/navigation'
import { API_KEY, WeatherDataType } from '../weatherData.type'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import UnknownWeatherIcon from '../../../../public/unknown-weather.svg'

export default function City() {
	const { city } = useParams()
	const [data, setData] = useState<WeatherDataType | null>(null)
	const URL: string = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`
	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch(URL)
			const resp_data = await resp.json()
			setData(resp_data)
		}
		fetchData()
	}, [URL])

	console.log(data)
	return (
		<div className='h-full flex items-center justify-center'>
			<h1>{data?.location.name}</h1>
			<div id='current-weather'>
				<Image
					src={`https://${data?.current.condition.icon}` || UnknownWeatherIcon}
					width={300}
					height={300}
					alt={'weather condition'}
				/>
			</div>
		</div>
	)
}
