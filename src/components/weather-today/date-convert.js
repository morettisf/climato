import React, { Component } from 'react';

const fullDate = (dUnix) => {
  let d = new Date(dUnix * 1000) // Convert the passed timestamp to milliseconds
  let dd = ('0' + d.getDate()).slice(-2)     // Add leading 0.
  let time;
            
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];                  
  let month = months[d.getMonth()]

  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let dayOfWeek = days[d.getDay()];

  time = dayOfWeek + ', ' + month + ' ' + dd;

  return time;
}

export default fullDate