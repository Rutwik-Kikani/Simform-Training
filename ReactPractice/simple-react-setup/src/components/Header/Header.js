import React from 'react';
import './Header.css'
const header = () => {
     return(
        <header>
        <div className="DateDayBox">
          <div className="DateBox">
              <p className="Date">12</p>
              <p className="Month">JAN</p>
              <p className="Year">2016</p>
          </div>
          <div className="DayBox">
              <p className="Day">Thursday</p>
          </div>
        </div>
      </header>
     );
}

export default header;