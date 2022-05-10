export const getUpcomingDates = (upcoming) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const upcomingDates = upcoming.slice(0, 30).map((day, i) => {
    const upcomingDate = new Date(day.dt_txt);
    const upcomingDays = days[upcomingDate.getDay()];
    // const image = day?.weather[0]?.icon;
    // const img = `http://openweathermap.org/img/wn/${image}@4x.png`;
    return upcomingDays;
  });
  return [...new Set(upcomingDates)];
};

export const renderDate = (upcoming) => {
  const dates = upcoming?.slice(0, 40).map((day) => {
    return {
      //day: getDay(day.dt_txt),
      icon: day.weather[0].icon,
    };
  });
  return [...new Set(dates)];
};