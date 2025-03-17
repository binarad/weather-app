'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
	const [selectedCity, setSelectedCity] = useState<string | null>(null)
	return (
		<div className='flex items-center justify-center h-full flex-col gap-6'>
			<label htmlFor='#city-search' className='text-4xl'>
				Enter Your City
			</label>
			<div className='flex  gap-6'>
				<input
					type='text'
					id='city-search'
					className='p-3 border-2 rounded border-black w-2xs'
					onChange={e => setSelectedCity(e.target.value)}
				/>
				<Link
					href={`/weather/${selectedCity}`}
					className='w-36 border-2 rounded  items-center justify-center flex'
				>
					Search
				</Link>
			</div>
		</div>
	)
}
