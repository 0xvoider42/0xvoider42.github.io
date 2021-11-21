export const WeatherAPI = async () => {
  let rain = [];

  const raw = await fetch(
    `api.openweathermap.org/data/2.5/weather?q=tallinn&units=metric&appid=32258fbeb94892bedaba54224da18fa5`
  );
  rain = await raw.json();
  console.log(rain);
  return rain;
};
