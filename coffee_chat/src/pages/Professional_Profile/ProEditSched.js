import React, { useEffect, useState } from 'react';
import './ProEditSched.css';
import NavBar from '../../components/navbar/index';
import SelectedTimes from './SelectedTimes';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import { useHistory } from 'react-router-dom';

function ProEditSched() {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [time, onSetTime] = useState('10:00');

  const [selectedTimes, setSelectedTimes] = useState([]);

  let availObjs = [];

  let proId = '';

  useEffect(() => {
    async function getAvailabilityItems() {
      try {
        let object_string = '';
        await fetch('http://localhost:5000/proSchedule/getItems', {
          method: 'GET',
          headers: { jwtToken: localStorage.token },
        })
          .then((res) => res.text())
          .then((text) => {
            object_string = text;
          })
          .then((text) => {
            availObjs = JSON.parse(object_string);
          });

        proId = availObjs[0].pro_id;
        setSelectedTimes(availObjs);
        console.log(availObjs);
        console.log(selectedTimes);
      } catch (err) {
        console.log(err);
      }
    }

    getAvailabilityItems();
  }, []);

  async function newTimeAdded(event) {
    event.preventDefault();
    const date = selectedDate.toJSON().substr(0, 10);

    try {
      // get professional's ID
      let object = '';
      let object_string = '';
      await fetch('http://localhost:5000/proSchedule/getID', {
        method: 'GET',
        headers: { jwtToken: localStorage.token },
      })
        .then((res) => res.text())
        .then((text) => (object_string = text));
      object = JSON.parse(object_string);
      // console.log(object)

      const proId = object.proId;

      const body = { proId, date, time };

      const postRes = await fetch('http://localhost:5000/proSchedule/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.text())

        .then((text) => console.log(text));

      // const parseRes =
      await postRes;

      history.go(0);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteAvailability(selectedDate, selectedTime) {
    // console.log(selectedDate)
    // console.log(selectedTime)
    try {
      // get professional's ID
      let object = '';
      let object_string = '';
      await fetch('http://localhost:5000/proSchedule/getID', {
        method: 'GET',
        headers: { jwtToken: localStorage.token },
      })
        .then((res) => res.text())
        .then((text) => (object_string = text));
      object = JSON.parse(object_string);
      // console.log(object)

      const selectedproId = object.proId;

      const body = { selectedDate, selectedTime, selectedproId };
      // const deleteAvailItem =
      await fetch('http://localhost:5000/proSchedule/delete', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavBar />
      <div id="sched_info">
        <div id="pro_edit_sched_container">
          <h2 id="edit_sched_title">Edit your availability</h2>
          <div id="sched_form">
            <form id="schedule_selection">
              <div id="date_picker">
                <label>Date:</label>
                <DatePicker
                  name="selectedDate"
                  value={selectedDate}
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
              </div>

              <br />
              <br />

              <div style={{ width: '250px', height: '110px' }} id="time_picker">
                <label style={{ width: 'max-content' }}>
                  Time (30 minute increment):
                </label>
                <TimePicker
                  disableClock={true}
                  onChange={onSetTime}
                  value={time}
                />
              </div>

              <br />
              <button
                onClick={newTimeAdded}
                id="submit_time_button"
                type="submit"
              >
                submit
              </button>
            </form>
          </div>
        </div>

        <div id="current_sched">
          <h2 id="current_sched_title">Currently selected</h2>
          <div id="current_sched_list">
            {selectedTimes.map((item) => {
              return (
                <div id="selected">
                  <SelectedTimes
                    pro_id={proId}
                    date={item.date.substr(0, 10)}
                    time={item.time.substr(0, 8)}
                  />{' '}
                  <button
                    id="rmv_time"
                    onClick={() =>
                      deleteAvailability(item.date.substr(0, 10), item.time)
                    }
                  >
                    delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProEditSched;
