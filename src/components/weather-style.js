import React from 'react';

const WeatherStyle = ({wstyle}) => {

  let condition;

  switch (wstyle) {

    case 'Clouds':
      condition = 'cloudy'
      break;
    case 'Rain':
      condition = 'rainy'
      break;
    case 'Clear':
      condition = 'sunny'
      break;
    case 'Snow':
      condition = 'snowy'
      break;

    default:
      condition = 'cloudy'
      break;
  }

  return (
    <div className='weather-box'><div className={condition}></div></div>
  )

}




export default WeatherStyle