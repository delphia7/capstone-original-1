import React, { Component } from 'react';

import { connect } from 'react-redux';

class HeaderHistory extends Component {
      render() {
            const { className } = this.props;
            return(
                  <div>
                  {/* <div>
                              <a href="#/">
                                    <h1> Shop</h1>
                              </a>
                        </div>
                         <div> 
                              <a href="#/signin">
                                    <h1>SignOut</h1>
                              </a>
                        </div> */}
                        <div className='headerhistory__links'>

                              {
                                    this.props.headerhistoryLinks.map((link, index) => {
                                          return (
                                                <a className='headerhistory__link' key={index} onClick={() => console.log('trying to switch tab')}>
                                                      {link.title}      
                                                </a>
                                    )   
                              })
                              
                        }
                  </div> 
                  </div>   
         )
     }
 }

 function mapStateToProps(state) {
      const{ headerhistoryLinks } = state.headerNavbar;
      return {
            headerhistoryLinks
      }
}

HeaderHistory = connect(mapStateToProps)(HeaderHistory);


export default HeaderHistory;
 
// export default function HeaderDesign(props) {
//       return (
//             <header className="row block center">
//                   <div>
//                         <a href="#/">
//                               <h1> Shop</h1>
//                         </a>
//                   </div>
//                   <div>
//                          <a href="#/signout">SignIn</a>
//                   </div>
//             </header>
//       );
// }