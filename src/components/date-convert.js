import React, { Component } from 'react';

export default function convertTimestamp(dUnix) {
  let d = new Date(dUnix * 1000) // Convert the passed timestamp to milliseconds
  let dd = ('0' + d.getDate()).slice(-2)     // Add leading 0.
  let time;
            
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];                  
  let month = months[d.getMonth()]

  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let dayOfWeek = days[d.getDay()]

  time = dayOfWeek + ', ' + month + ' ' + dd;

  return time;
}