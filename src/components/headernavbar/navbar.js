import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../static/assets/images/leftside.jpg';
import Logo1 from '../../../static/assets/images/rightside.png';

class Navbar extends Component {
    render() {
        return(
            <div className='navbar'>
                 <div className="left-side">
                    <div className="banner-image">
                        <img className='navbar-img' src="..\..\..\static\assets\images\leftside.jpg" alt=""/> 
                    </div>
                </div>

                <div className="links-wrapper">
                    <div className="nav-link">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </div>

                    <div className="nav-link">
                        <NavLink to="/hairstyles">Hairstyles</NavLink>
                    </div>

                    <div className="nav-link">
                        <NavLink to="/appointment">Book Appointment</NavLink>
                    </div>

                    {/* <div className="nav-link">
                        <NavLink to="/location">Location</NavLink>
                    </div> */}

                    <div className="nav-link">
                        <NavLink to="/signin">SignIn</NavLink>
                    </div>
                    
                </div>
            
                <div className="right-side">
                    <div className="banner-image">
                        <img className='navbar-img' src="..\..\..\static\assets\images\rightside.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;