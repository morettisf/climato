import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherStyle from './weather-style';
import GoogleMap from './google_map';
import { Link } from 'react-router';

class WeatherTodayDetail extends Component {

  renderWeatherView(data) {

    console.log(data)

    if (data.name) {

      const name = data.name;
      const currentConditions = data.weather[0].main;
      const currentTemp = (((data.main.temp - 273.15) * 9/5) + 32).toFixed();
      const tempMin = (((data.main.temp_min - 273.15) * 9/5) + 32).toFixed();
      const tempMax = (((data.main.temp_max - 273.15) * 9/5) + 32).toFixed();
      const humidity = data.main.humidity;
      const { lon, lat } = data.coord;

      return (
        <div>
          <WeatherStyle wstyle={currentConditions} />
          <Link to={'/five'}><button>5 Day Forecast</button></Link>
          <GoogleMap lon={lon} lat={lat} />
          <div>Location: {name}</div>
          <div>Current Conditions: {currentConditions}</div>
          <div>Current Temp: {currentTemp}</div>
          <div>Temp Min: {tempMin}</div>
          <div>Temp Max: {tempMax}</div>
          <div>Humidity: {humidity}</div>
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
      {this.renderWeatherView(this.props.weather_today)}
      </div>
    )
  }
}




function mapStateToProps(state, props) {
  return { 
    weather_today: state.weather_today,
    weather_five: state.weather_five
  };
}

export default connect(mapStateToProps)(WeatherTodayDetail);