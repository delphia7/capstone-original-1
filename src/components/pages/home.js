import React, { Component } from 'react';

import Logo from '../../../static/assets/images/background/twisty.jpg';
import Header from '../headernavbar/header';
import Navbar from '../headernavbar/navbar';
import Schedule from '../pages/schedule';
import Location from '../pages/location';
import Footer from '../pages/footer';
import Video from '../pages/video';

//import Footer from './headernavbar/footer';
//import SignIn from '../auth/signin';

class Home extends Component {
      render() {
            return (
                  <div>

                  <Header />
                  <Navbar />
               
                  

                        <div className="hero-section">
                              <div className="top-heading">
                                    <img src={Logo} width="500" alt="logo" />
                                    
                              </div> 
                                

                        </div>
                  <Schedule />
                  <Location /> 
                  <Video />
                  <Footer /> 
                  </div> 
            )
      }
}

export default Home;