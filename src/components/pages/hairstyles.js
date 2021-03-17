import React, { Component } from 'react';

import HeaderHistory from '../shophistory/headerhistory';
import NavbarHistory from '../shophistory/navbarhistory';


class Hairstyles extends Component {
      render() {
            return (
                  <div className='hairstyle'>
                        {/* Hairstyles */}
                           <HeaderHistory />  
                          <NavbarHistory />  
                  </div>
        )
    }
}

export default Hairstyles;