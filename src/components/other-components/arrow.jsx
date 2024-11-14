import React from "react";
import './arrow.css';

function Arrow({ startAnimation }) {
  return (
    <div className={`graph__wrapper ${startAnimation ? 'start-animation' : ''}`}>
      <svg width="315px" height="107px" viewBox="3 0 315 107" version="1.1" style={{ overflow: 'visible' }}>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
          />
          <path
            className="dashed"
            fill="none"
            strokeWidth="8"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
          />
          <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#db5862">
            <animateMotion rotate="auto" begin="0.07s" dur="1s" repeatCount="1" fill="freeze">
              <mpath xlinkHref="#Path-1" />
            </animateMotion>
          </polyline>
        </g>
      </svg>
    </div>
  );
}

export default Arrow;
