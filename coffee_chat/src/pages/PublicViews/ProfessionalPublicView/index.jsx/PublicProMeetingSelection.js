import React, { useEffect, useState } from 'react';
import './PublicProMeetingSelection.css';
import Fade from 'react-reveal/Fade';
import { GetProfessionalAvailability } from '../../../../services/professional';
import { ExtractDate } from '../../../../utils/date';

const PublicProMeetingSelection = ({ professionalInfo }) => {
  const { userid } = professionalInfo;
  // console.log(userid);
  const [availabilityArr, setAvailabilityArr] = useState([]);

  const NoResults = () => {
    return <div>No results</div>;
  };

  const handleSelectTime = (date, time) => {
    console.log(`selected ${date} ${time} `);
  };

  const AvailabilityComponent = (date, time) => {
    return (
      <div id="meeting_info_container">
        <p className="meeting_info" id="date">
          {ExtractDate(date)}
        </p>
        <p className="meeting_info" id="time">
          {time}
        </p>
        <div style={{ marginLeft: '230px' }}>
          <button
            id="select_availability"
            value="submit"
            onClick={handleSelectTime}
          >
            Reserve
          </button>
        </div>
      </div>
    );
  };

  useEffect(async () => {
    const professionalAvailResults = await GetProfessionalAvailability(userid);
    setAvailabilityArr(professionalAvailResults.results);
  }, [userid]);

  return (
    <div id="public_pro_availability">
      <div className="public_avail_container">
        <Fade right>
          <div id="public_view_avail">
            <h3 style={{ color: 'black', fontSize: '23px' }}>Availability</h3>
            <div id="meeting_time_container">
              <Fade bottom cascade>
                {/* Render meetings */}
                {availabilityArr.length !== 0 ? (
                  availabilityArr.map((availObj) => {
                    const { date, time } = availObj;
                    return AvailabilityComponent(date, time);
                  })
                ) : (
                  <NoResults />
                )}
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default PublicProMeetingSelection;
