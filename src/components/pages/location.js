import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Location extends Component {
      render() {
          return (
              <div className="squares-wrapper">
                  <div className="left-column">
                      {/* <div className="map"> */}
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.6041160017894!2d-73.92138468478811!3d40.814692479320826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5c5f09bcf77%3A0xe8118240207dff98!2s483%20Willis%20Ave%2C%20The%20Bronx%2C%20NY%2010455!5e0!3m2!1sen!2sus!4v1604668671642!5m2!1sen!2sus" width="100%"></iframe>
                      {/* </div> */}
                  </div>
  
                  <div className="right-column">
                      <div className="location-wrapper">
                          <p>Nassou takes customers with appointment as well on a walk-in.
                          First comes, first served.Feel free to call ahead of time to check on wait times,  but the last customer will be taken at 6pm.  We promise if you have to wait it will be well worth it!  Come by, hang out, and get cleaned up today!</p>
  
                      </div>
  
                      <div className="address">
                          <FontAwesomeIcon icon="map-marker-alt" /> 
                              <p>483 Willis Ave, Bronx, New York</p>
  
                      </div>
  
                      <div className="phone">
                          <FontAwesomeIcon icon="phone-volume" />
                              <p>718 292 1898</p>
                      </div>
                  
                  </div>   
              </div>
          )
      }
  }
  
  export default Location;