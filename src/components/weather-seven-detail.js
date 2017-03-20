import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class WeatherSevenDetail extends Component {

  renderWeatherView(data) {
      console.log(data)

    if (data.city) {

      const city = data.city.name

      return <div>{city}</div>
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

export default connect(mapStateToProps)(WeatherSevenDetail);