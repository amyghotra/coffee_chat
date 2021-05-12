import React from 'react';
import './PublicProInfo.css';

import Fade from 'react-reveal/Fade';

const PublicProInfo = ({ professionalInfo }) => {
  const { name, social, position, company } = professionalInfo;

  return (
    <>
      <div id="public_pro">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ backgroundColor: 'white' }}>
            <Fade left>
              <h3
                style={{
                  width: '30vw',
                  fontSize: '65px',
                  paddingLeft: '15px',
                  fontFamily: "'Raleway', sans-serif",
                  color: '#283044',
                }}
                id="public_pro_name"
                className="public_pro-profile-top-item"
              >
                {name}
              </h3>
            </Fade>
          </div>
          <div className="public_pro-profile-top-container">
            <Fade left>
              <div>
                <p className="public_pro-profile-top-item">
                  {company}: {position}
                </p>
              </div>

              <div>
                <p className="public_pro-profile-top-item" id="public_linkedin">
                  {social}
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicProInfo;
