import { useState } from 'react'

export default function useFetch<T>(url: string) {
	const [data, setData] = useState<T | null>(null)
	fetch(url)
		.then(resp => resp.json())
		.then(resp_data => setData(resp_data))

	return data
}
