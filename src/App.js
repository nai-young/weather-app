import { TemperatureHigh } from '@styled-icons/fa-solid/TemperatureHigh';
import { TemperatureLow } from '@styled-icons/fa-solid/TemperatureLow';
import { ContrastDrop } from '@styled-icons/remix-line/ContrastDrop';
import { useEffect, useState } from 'react';
import Button from './components/button';
import Input from './components/input';
import { Helmet } from 'react-helmet';
import * as S from './styled';
import axios from 'axios';

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function App() {
	const [form, setForm] = useState({});
	const [data, setData] = useState({});
	const [success, setSuccess] = useState(false);
	const [image, setImage] = useState('');
	const [upcoming, setUpcoming] = useState([]);
	const [loadUpcoming, setLoadUpcoming] = useState(true);

	const mainRightData = [
		{
			label: 'Humidity',
			icon: <ContrastDrop />,
			data: `${data?.main?.humidity} %`,
		},
		{
			label: 'Maximum',
			icon: <TemperatureHigh />,
			data: `${Math.trunc(data?.main?.temp_max)} ºC`,
		},
		{
			label: 'Minimum',
			icon: <TemperatureLow />,
			data: `${Math.trunc(data?.main?.temp_min)} ºC`,
		},
	];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const key = process.env.REACT_APP_API_KEY;
				const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data?.coord?.lat}&lon=${data?.coord?.lon}&appid=${key}&units=metric`;
				const res = await axios.get(url);
				if (res.data) setUpcoming(res.data.list);
				setLoadUpcoming(false);
			} catch (error) {
				setLoadUpcoming(false);
				// add handle error
			}
		};
		fetchData();
	}, [data]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const key = process.env.REACT_APP_API_KEY;
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${form?.city}&units=metric&appid=${key}`;
		try {
			const resWeather = await axios.get(url);
			if (resWeather.data) {
				setData(resWeather.data);
				setSuccess(resWeather.status === 200 ? true : false);
				const image = resWeather?.data.weather[0]?.icon;
				const img = `http://openweathermap.org/img/wn/${image}@4x.png`;
				setImage(img);
			}
		} catch (error) {
			setData(error);
		}
	};

	const getDate = (sunrise, timezone) => {
		const date = new Date((sunrise + timezone) * 1000);
		const day = days[date.getDay()];
		const hour = `${date.getHours()}:${date.getMinutes()} h`;
		const month = `${months[date.getMonth()]} ${date.getDate()}`;
		return `${day} | ${month} | ${hour}`;
	};

	const getDay = (date) => {
		const upcomingDate = new Date(date);
		const upcomingDays = days[upcomingDate.getDay()];
		return upcomingDays;
	};

	// const days = upcoming?.slice(0, 40).filter((day) => days[day.getDay()] !==)
	// const repeatDays = [...new Set(days)]

	const result = upcoming
		?.slice(0, 40)
		.filter(
			(day, i, self) =>
				i === self.findIndex((t) => getDay(t.dt_txt) === getDay(day.dt_txt))
		);

	const getDescription = (data) =>
		data
			.toLowerCase()
			.split(' ')
			.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
			.join(' ');

	return (
		<S.Wrapper success={success}>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Weather App</title>
				<link rel='canonical' href='http://mysite.com/example' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap'
					rel='stylesheet'
				></link>
			</Helmet>
			{success ? (
				<>
					<S.Main>
						<S.MainLeft>
							<S.WeatherIcon src={image} alt='Weather' />
							{getDescription(data.weather[0].description)}
							<S.Temperature>{Math.trunc(data.main.temp)} ºC</S.Temperature>
						</S.MainLeft>
						<S.Form action='' method='GET' onSubmit={handleSubmit}>
							<Input
								required
								type='text'
								name='city'
								placeholder='City name...'
								onChange={handleChange}
							/>
							<Button type='submit'>Search</Button>
							<S.Message>{!success ? data.message : null}</S.Message>
						</S.Form>
						<S.MainRight>
							{mainRightData.map((item, i) => (
								<S.RightItem key={`item${i}`}>
									<S.RightSection>
										{item.icon} {item.label}
									</S.RightSection>
									<span>{item.data}</span>
								</S.RightItem>
							))}
						</S.MainRight>
					</S.Main>
					<S.Content>
						<img src='clouds_divider.png' alt='Divider' />
						<S.DetailsWrapper>
							<S.Details>
								<S.Actual>{data.name}</S.Actual>
								<S.Timezone>
									{getDate(data.sys.sunrise, data.timezone)}
								</S.Timezone>
							</S.Details>
							{loadUpcoming ? (
								<h3>Loading upcoming data...</h3>
							) : (
								<S.Upcoming>
									{result.map((day, i) => {
										const date = getDay(day.dt_txt);
										const image = day.weather[0].icon;
										const img = `http://openweathermap.org/img/wn/${image}@4x.png`;
										return (
											<S.UpcomingDay key={`day${i}`}>
												{[...new Set(date)]}
												<img src={img} alt='Weather' />
												{Math.trunc(day.main.temp)} ºC
											</S.UpcomingDay>
										);
									})}
								</S.Upcoming>
							)}
						</S.DetailsWrapper>
					</S.Content>
				</>
			) : (
				<S.Form action='' method='GET' onSubmit={handleSubmit} center>
					<Input
						required
						type='text'
						name='city'
						placeholder='City name...'
						onChange={handleChange}
					/>
					<Button type='submit'>Search</Button>
					<S.Message>{!success ? data.message : null}</S.Message>
				</S.Form>
			)}
		</S.Wrapper>
	);
}

export default App;
