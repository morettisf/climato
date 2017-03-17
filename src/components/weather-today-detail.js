import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherTodayDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderWeatherView(data) {

    console.log(data)

    if (data.name) {

      const name = data.name;
      const currentConditions = data.weather[0].main;
      const currentTemp = data.main.temp;
      const tempMin = data.main.temp_min;
      const tempMax = data.main.temp_max;
      const humidity = data.main.humidity;

      return (
        <div>
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
      {this.renderWeatherView(this.props.weather)}
      </div>
    )
  }
}




function mapStateToProps(state, props) {
  return { 
    weather: state.weather_today
  };
}

export default connect(mapStateToProps)(WeatherTodayDetail);