import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import dayOfWeek from './date-convert-short';

class WeatherSevenDetail extends Component {

  renderWeatherView(data) {
      console.log(data)

    if (data.city) {

      const name = data.city.name;
      const dates = dayOfWeek(data.list.dt);

      let tableData = data.list.map((weather) => {
        return (
          <tr key={dayOfWeek(weather.dt)}>
            <td>{dayOfWeek(weather.dt)}</td>
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
      return <tr><td>Nothing yet...</td></tr>
    }

  }

  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Day</th>
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
        <Link to={'/'}><button type='button' className='btn btn-primary-outline'>Today's Forecast</button></Link>
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