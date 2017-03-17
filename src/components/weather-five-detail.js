import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class WeatherFiveDetail extends Component {

  renderWeatherView(data) {
      console.log(data)

    if (data.name) {

    }

    else {
      return <div>Nothing yet...</div>
    }

  }

  render() {

    return (
      <div>
      {this.renderWeatherView(this.props.weather_five)}
      </div>
    )
  }

}

function mapStateToProps(state, props) {
  return { 
    weather_five: state.weather_five,
    weather_today: state.weather_today
  };
}

export default connect(mapStateToProps)(WeatherFiveDetail);