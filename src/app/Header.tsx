'use client'

import Link from 'next/dist/client/link'
import { useState } from 'react'

const Header = () => {
	// const [data, setData] = useState<WeatherDataType | null>(null)
	const [city, setCity] = useState<string | null>(null)

	// Fetch link and api key
	return (
		<header className='bg-blue-400 h-20 flex  items-center gap-6 justify-center w-full'>
			<input
				type='text'
				name='search'
				className='bg-amber-200 border-black border w-2xl h-1/2 px-3 rounded'
				placeholder='Enter your city name'
				onChange={event => setCity(event.target.value)}
			/>
			<Link
				href={`/weather/${city}`}
				className='bg-red-300 h-1/2 w-24 flex items-center justify-center'
			>
				<button className='hover:cursor-pointer '>Search</button>
			</Link>
		</header>
	)
}

export default Header
