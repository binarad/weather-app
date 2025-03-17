'use client'

export default function Home() {
	return (
		<div>
			<div id='main-page' className='h-screen flex flex-col'>
				<main className='bg-purple-300 h-full flex p-3 m-2'>
					<div
						id='weather-condition-data'
						className='h-full w-xs bg-red-300 ml-auto'
					></div>
				</main>
			</div>
		</div>
	)
}
