import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import dayOfWeek from './date-convert-short';

export class WeatherSevenDetail extends Component {

  renderWeatherView(data) {

    if (data.city) {

      const name = data.city.name;
      const dates = dayOfWeek(data.list.dt);

      let tableData = data.list.map((weather) => {
        return (
          <tr key={dayOfWeek(weather.dt)}>
            <td className='dow'>{dayOfWeek(weather.dt)}</td>
            <td>{weather.weather[0].main}</td>
            <td>{(((weather.temp.day - 273.15) * 9/5) + 32).toFixed()} F</td>
            <td>{(((weather.temp.night - 273.15) * 9/5) + 32).toFixed()} F</td>
            <td>{weather.humidity}%</td>
            <td>{(weather.speed * 2.24).toFixed()} mph</td>
          </tr>
        )
      })

      return(tableData)

    }

    else {
      return <tr></tr>
    }

  }

  renderCity(data) {
    if (data.city) {
      const name = data.city.name;
      return name
    }

    else {
      const name = ''
      return name
    }
  }

  render() {

    return (
      <div>
        <h1>{this.renderCity(this.props.weather)}</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th><img src='../../images/sun80.png' /></th>
                <th><img src='../../images/moon80.png' /></th>
                <th><img src='../../images/humidity80.png' /></th>
                <th><img src='../../images/wind80.png' /></th>
              </tr>
            </thead>
            <tbody>
              {this.renderWeatherView(this.props.weather)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state, props) {
  return { 
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherSevenDetail);