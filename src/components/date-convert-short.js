import React, { Component } from 'react';

const dayOfWeek = (dUnix) => {
  let d = new Date(dUnix * 1000) // Convert the passed timestamp to milliseconds
  let time;
            
  let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  let dayOfWeek = days[d.getDay()];

  time = dayOfWeek;

  return time;
}

export default dayOfWeek