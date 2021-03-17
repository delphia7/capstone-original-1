import {
      SET_HEADERHISTORY_LINKS,
      SET_NAVBARHISTORY_LINKS
} from '../actions/types';


const INITIAL_STATE = {
    headerhistoryLinks: [
        {
            title: 'Shop'
        },
    
        {
            title: 'SignOut'
        }
    ],
    navbarhistoryLinks: [
        {
            title: 'account'
        },
        {
            title: 'purchases'
        }
    ]
}
  
  export default function(state = INITIAL_STATE, action) {
      switch (action.type) {
          case SET_HEADERHISTORY_LINKS:
              return {
                  ...state,
                  headerhistoryLinks: action.payload
            }
          case SET_NAVBARHISTORY_LINKS:
              return {
                  ...state,
                  navbarhistoryLinks: action.payload
            }
          default: return state;
    }
}