import React, { Component } from 'react';

import ReactPlayer from 'react-player';

class Video extends Component {
      render() {
            return (
                  <div className="video-wrapper">
              {/* <div className="hero1-section"> */}
                <div className="top-heading1">
                  <h2>new & happy look any time !</h2>
                </div>
              {/* </div> */}
            
              <div className="hero-section1">
                  <ReactPlayer width='1020px' controls url='https://www.youtube.com/watch?v=hXUx2NQM8YY' />         
              </div>
            </div>
        )
    }
}

export default Video;