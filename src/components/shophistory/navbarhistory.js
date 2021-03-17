import React, { Component } from 'react';

import { connect } from 'react-redux';

class NavbarHistory extends Component {
      render() {
            //const { className } = this.props;
            return(
                  <div>
                   <header className="row block center">
                        <div>
                              <a href="#/">
                                    <h1> Account</h1>
                              </a>
                        </div>
                        <div>
                              <a href="#/signin">Purchases</a>
                        </div>
                  </header>
                  <div className='navbarHistory'>
                        {
                              this.props.navbarhistoryLinks.map((link, index) => {
                                    return (
                                          <a className='navbarhistory__link' key={index} onClick={() => console.log('trying to switch tab')}>
                                                {link.title}      
                                          </a>
                                    )   
                              })
                              
                        }

                        {/* <div>
                              <a href="#/">
                                    <h1> Shop</h1>
                              </a>
                        </div>
                        <div>
                              <a href="#/signin">
                                    <h1>SignOut</h1>
                              </a>
                        </div>
                   */}
                  </div>
                  </div>
                        
         )
     }
 }

function mapStateToProps(state) {
      const{ navbarhistoryLinks } = state.headerNavbar;
      return {
            navbarhistoryLinks
      }
}

 NavbarHistory = connect(mapStateToProps)(NavbarHistory);

 export default NavbarHistory;