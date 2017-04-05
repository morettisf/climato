import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';
import axios from 'axios';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
    
    // binding these to the component's state
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.convertAddress = this.convertAddress.bind(this);
  }

  componentWillMount() {

    navigator.geolocation.getCurrentPosition(function(position) {
      this.convertAddress(position.coords.latitude, position.coords.longitude);
    }.bind(this));

    window.initAutocomplete = function() {
      const autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), 
        {types: ['(cities)'], componentRestrictions: {country: 'us'}});
    }
  }

  convertAddress(lat, lon) {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key=AIzaSyAi3rCykF43m8bXF0A9TD9qSnPf_VMUW8c')
      .then((res) => {
        console.log(res)
        this.setState({term: res.data.results[1].formatted_address})
      })
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.getWeather(document.getElementById('autocomplete').value);

    this.setState({ term: '' }); // clears out search box after searching
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          id='autocomplete'
          placeholder='Search for your location'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <div className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWeather }, dispatch);
}

// null is for state
export default connect(null, mapDispatchToProps)(SearchBar);