import React, { Component } from 'react';

class Schedule extends Component {
      render() {
            return (
                  <div className='schedule'>
                        <div className="title-warpper">
                              Opening Hours:
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    MONDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    TUESDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    WEDNESDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    THURSDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    FRIDAY
                                    
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    SATURDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    SUNDAY
                              </div>
                              <div className="open-subtitle">10am - 5pm</div>
                        </div>

                  </div>
            )
      }
}

export default Schedule;