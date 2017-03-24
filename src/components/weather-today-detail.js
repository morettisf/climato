import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherStyle from './weather-style';
import { Link } from 'react-router';
import fullDate from './date-convert';

export class WeatherTodayDetail extends Component {

  renderWeatherView(data) {

    if (data.city) {

      const name = data.city.name;
      const date = fullDate(data.list[0].dt);
      const weatherType = data.list[0].weather[0].main;
      const weatherTypeDetail = data.list[0].weather[0].description;
      const dayTemp = (((data.list[0].temp.day - 273.15) * 9/5) + 32).toFixed();
      const nightTemp = (((data.list[0].temp.night - 273.15) * 9/5) + 32).toFixed();
      const humidity = data.list[0].humidity;
      const windSpeed = (data.list[0].speed * 2.24).toFixed();
      const { lon, lat } = data.city.coord;

      return (
        <div className='main-content fade-in'>
          <h1>{name}</h1>
          <h2>{date}</h2>
          <WeatherStyle wstyle={weatherType} />
          <h3>{weatherTypeDetail}</h3>
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
        </div>
      )

    }

    else {
      return <div><img src='../../images/weather-combo.png' className='background' /></div>
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