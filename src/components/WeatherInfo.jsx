import React from 'react';

const WeatherInfo = (props) => {
  return (
    <>
      {props.error && (
        <div className='alert alert-danger'>
          <p>{props.error.message}</p>
        </div>
      )}
      {props.temperature !== '' ? (
        <div className='card card-body'>
          <p>
            Location: {props.city}, {props.country}
          </p>
          <p>
            Temperature: {props.temperature} °C, {props.description}
          </p>
          <p>Humidity: {props.humidity}</p>
          <p>Wind speed: {props.wind_speed}</p>
        </div>
      ) : (
        <div className='card card-body'>No request yet</div>
      )}
    </>
  );
};

export default WeatherInfo;
