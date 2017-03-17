import React from 'react';

const WeatherStyle = ({wstyle}) => {
  console.log(wstyle)
  if (wstyle === 'Clouds') {
    return (
    <div className='blue'></div>
    )
  }

  else {
    return (
    <div className='red'></div>
    )
  }
}

export default WeatherStyle