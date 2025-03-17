import '../globals.css'
export default function WeatherLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<section>{children}</section>
		</div>
	)
}
