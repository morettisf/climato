import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherStyle from './weather-style';
import GoogleMap from './google_map';
import { Link } from 'react-router';
import dateConvert from './date-convert';

class WeatherTodayDetail extends Component {

  renderWeatherView(data) {

    console.log(data)

    if (data.city) {

      const name = data.city.name;
      const date = dateConvert(data.list[0].dt);
      const weatherType = data.list[0].weather[0].main;
      const dayTemp = (((data.list[0].temp.day - 273.15) * 9/5) + 32).toFixed();
      const nightTemp = (((data.list[0].temp.night - 273.15) * 9/5) + 32).toFixed();
      const humidity = data.list[0].humidity;
      const windSpeed = (data.list[0].speed * 2.24).toFixed();;
      const { lon, lat } = data.city.coord;

      return (
        <div>
          <GoogleMap lon={lon} lat={lat} />
          <h2>{date}</h2>
          <WeatherStyle wstyle={weatherType} />
          <div className ='weather-info'>
            <div className='info1'>
              <div className='day'><img src='../../images/sun80.png' /> {dayTemp} F</div>
              <div className='night'><img src='../../images/moon80.png' /> {nightTemp} F</div>
            </div>
            <div className='info2'>
              <div className='humidity'><img src='../../images/humidity80.png' /> {humidity}%</div>
              <div className='wind'><img src='../../images/wind80.png' /> {windSpeed} mph</div>
            </div>
          </div>
            <Link to={'/seven'}><button type='button' className='btn btn-primary-outline'>7 Day Forecast</button></Link>
        </div>
      )

    }

    else {
      return <div>Nothing yet...</div>
    }

  }

  render() {

    return (
      <div>
      {this.renderWeatherView(this.props.weather)}
      </div>
    )
  }
}




function mapStateToProps(state, props) {
  return { 
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherTodayDetail);