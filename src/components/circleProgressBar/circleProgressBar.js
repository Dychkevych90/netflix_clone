import React from 'react';

import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {CircleBarWrapper} from  './styled.js';

const CircleProgressBar = ({progress, size, strokeWidth = 10}) => {
  return (
    <CircleBarWrapper size={size}>
        <CircularProgressbar
          value={progress * 10}
          strokeWidth={strokeWidth}
          styles={buildStyles({
              trailColor: "transparent",
              pathColor: 'rgb(102, 187, 106)',
              strokeLinecap: "butt",
              textColor: "#fff",
              fontWeight: 'bold',
              textSize: '30px'
          })
          }
          text={`${Math.floor(progress * 10) / 10}`}
        />
    </CircleBarWrapper>
  )
}

export default CircleProgressBar;
