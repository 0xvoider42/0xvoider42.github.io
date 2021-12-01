import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './Weather.css';

function Weather() {
  // creating a stateful hooks to be used in react components
  const [apiData, setApiData] = useState();
  const [getState, setGetState] = useState();
  const [state, setState] = useState('Tallinn');
  // t is a internationalization variable
  const { t } = useTranslation();

  const url = ` https://api.weatherapi.com/v1/current.json?key=21f37490a27e473d98b234230212611&q=${state}`;

  // @useEffect() react basic hook used to subscribe and listen to the api
  useEffect(() => {
    getWeather();
    // @mounted controls the data leak cases
    let mounted = true;
    async function getWeather() {
      const raw = await fetch(url);
      const rain = await raw.json();
      console.log(rain);
      if (mounted) {
        setTimeout(() => setApiData(rain), 1 * 1000);
      }
    }
    return () => {
      mounted = false;
    };
  });

  // handler for the input in the search bar
  const inputHandler = (event) => {
    setGetState(event.target.value);
  };
  // assigns the value to the @useState value
  const submitHandler = () => {
    setState(getState);
  };

  return (
    <>
      <div className='page-content page-container' id='page-content'>
        <form className='w-full max-w-sm'>
          <div className='flex items-center border-b border-teal-500 py-2'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='text'
              id='location-name'
              placeholder='Your city here'
              onChange={inputHandler}
              value={getState}
            />
            <button
              className='flex-shrink-0 bg-blue-800 hover:bg-blue-700 border-green-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
              type='button'
              onClick={submitHandler}
            >
              {t('weather.search')}
            </button>
          </div>
        </form>
        <div className='card mt-3 mx-auto' style={{ width: '60vw' }}></div>
      </div>
      <div className='padding'>
        {apiData && (
          <div className='row container d-flex justify-content-center'>
            <div className='col-lg-8 grid-margin stretch-card'>
              <div className='card card-weather'>
                <div className='card-body'>
                  <div className='weather-date-location'>
                    <h3>{apiData.location.localtime}</h3>
                    <p className='text-gray'>
                      {' '}
                      <span className='weather-date'>{apiData.location.name} /</span>{' '}
                      <span className='weather-location'>{apiData.location.region}</span>{' '}
                    </p>
                  </div>
                  <div className='weather-data d-flex'>
                    <div className='mr-auto'>
                      <h4 className='display-3'>
                        {apiData.current.temp_c} <span className='symbol'>°</span>C
                      </h4>
                      <h3>
                        {' '}
                        {t('weather.feels_like')} {apiData.current.feelslike_c} °C{' '}
                      </h3>
                      <p> {apiData.current.condition.text} </p>
                    </div>
                  </div>
                </div>
                <div className='card-body p-0'>
                  <div className='d-flex weakly-weather'>
                    <div className='weakly-weather-item'>
                      <p className='mb-0'>
                        {' '}
                        {t('weather.wind_direction')} {apiData.current.wind_dir} \\{' '}
                        {t('weather.speed_km/h')} {apiData.current.wind_kph}
                      </p>{' '}
                      <i className='mdi mdi-weather-cloudy'></i>
                      <p className='mb-0'>
                        {' '}
                        {t('weather.gust_speed')} {apiData.current.gust_kph}{' '}
                      </p>
                    </div>
                    <div className='weakly-weather-item'>
                      <p className='mb-1'>
                        {' '}
                        {t('weather.humidity')} {apiData.current.humidity}%{' '}
                      </p>{' '}
                      <i className='mdi mdi-weather-hail'></i>
                      <p className='mb-0'>
                        {' '}
                        {t('weather.precipitation')} {apiData.current.precip_mm}{' '}
                        {t('weather.millimeter')}
                      </p>
                    </div>
                    <div className='weakly-weather-item'>
                      <p className='mb-1'>
                        {' '}
                        {t('weather.pressure')} {apiData.current.pressure_mb}{' '}
                        {t('weather.millibar')}
                      </p>{' '}
                      <i className='mdi mdi-weather-partlycloudy'></i>
                      <p className='mb-0'>
                        {' '}
                        {t('weather.uv')} {apiData.current.uv}{' '}
                      </p>
                    </div>
                    <div className='weakly-weather-item'>
                      <p className='mb-1'>
                        {' '}
                        {t('weather.visibility')} {apiData.current.vis_km} {t('weather.kilometer')}{' '}
                      </p>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
