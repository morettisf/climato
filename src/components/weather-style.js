import React from 'react';

const WeatherStyle = ({wstyle}) => {
  console.log(wstyle)
  if (wstyle === 'Clouds') {
    return (
    <div className='cloudy'></div>
    )
  }

  if (wstyle === 'Rain') {
    return (
    <div className='rainy'></div>
    )
  }

  if (wstyle === 'Clear') {
    return (
    <div className='sunny'></div>
    )
  }

  if (wstyle === 'Snow') {
    return (
    <div className='snowy'></div>
    )
  }

  else {
    return (
    <div className='cloudy'></div>
    )
  }
}

export default WeatherStyle