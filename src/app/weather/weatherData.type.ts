export type HourType = {
	chance_of_rain: number
	chance_of_snow: number
	cloud: number
	condition: WeatherConditionType
	dewpoint_c: number
	feelslike_c: number
	gust_kph: number
	heatindex_c: number
	humidity: number
	last_updated: string
	last_updated_epoch: number
	pressure_mb: number
	temp_c: number
	uv: number
	vis_km: number
	wind_degree: number
	wind_dir: string
	wind_kph: number
	windchill_c: number
}
export type DayType = {
	avghumidity: number
	avgtemp_c: number
	avgvis_km: number
	condition: WeatherConditionType
	daily_chance_of_rain: number
	daily_change_of_snow: number
	daily_will_it_rain: boolean
	daily_will_it_snow: boolean
	maxtemp_c: number
	maxwind_kph: number
	mintemp_c: number
	totalprecip_mm: number
	totalsnow_cm: number
	uv: number
}
type AstroType = {
	is_moon_up: boolean
	is_sun_up: boolean
	moon_illumination: number
	moon_phase: string
	moonrise: string
	moonset: string
	sunrise: string
	sunset: string
}

export type DailyForecastType = {
	astro: AstroType
	date: string
	date_epoch: string
	day: DayType
	hour: HourType[]
}

type WeatherForecastType = {
	forecastday: DailyForecastType[]
}

type WeatherConditionType = {
	code: number
	icon: string
	text: string
}

export type AirQualityType = {
	co: number
	gb_defra_index: number
	no2: number
	o3: number
	pm2_5: number
	so2: number
	us_epa_index: number
}

export type CurrentWeatherType = {
	air_quality: AirQualityType
	cloud: number
	condition: WeatherConditionType
	dewpoint_c: number
	feelslike_c: number
	gust_kph: number
	heatindex_c: number
	heatindex_f: number
	humidity: number
	is_day: boolean
	last_updated: string
	last_updated_epoch: number
	precip_mm: number
	pressure_mb: number
	temp_c: number
	uv: number
	vis_km: number
	wind_degree: number
	wind_dir: string
	wind_kph: number
	windchill_c: number
}

export type WeatherDataType = {
	alerts: []
	current: CurrentWeatherType
	forecast: WeatherForecastType
	location: {
		country: string
		local_time: string
		name: string
		region: string
		tz_id: string
	}
}

export const API_KEY: string = '485589c5ce3b49e2a1d182121242805'
