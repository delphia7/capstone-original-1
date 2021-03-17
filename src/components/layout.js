import React, { Component } from 'react';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhoneVolume, faMapMarkerAlt, faClock} from "@fortawesome/free-solid-svg-icons";
import Icons from '../components/pages/helpers/icons';

library.add(faPhoneVolume, faMapMarkerAlt, faClock);

class Layout extends Component {
  render() {
    Icons();
    return (
      <div className='layout'>
        {this.props.children}

         <FontAwesomeIcon /> 
        {/* <Router history={history}>  */}
        {/* <Route>
          <div>
            {/* <Switch>
                  {/* <Route exact path="/" component={Home} /> */}
                   {/* <Route path="/hairstyles" component={Hairstyles} /> */}
                  <div>
            {/* </Switch>  */}
          </div>
        {/* </Route>   */}
        {/* </Router>  */}
        {/* <Home /> */}
        {/* <Header />
        <Navbar />
        <SignIn /> */}
      </div>
    );
  }
}

export default Layout;