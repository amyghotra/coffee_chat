import React from 'react';
import './ProEditSched.css';

export default function SelectedTimes(props) {
  return (
    <>
      <div id="current_sched_item">
        <p id="current_date">Date: {props.date}</p>
        <p id="current_time">Time: {props.time}</p>
        {/* <button onClick={deleteAvailability} id="cancel_date_button">Remove</button> */}
      </div>
    </>
  );
}
