import {ADD_TO_HOME_SLIDE_IMGS} from './actions'

// home-slide-images reduser
export const homeSlideImgsReducer= (
  state=['https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61DUO0NqyyL._SX3000_.jpg',
         'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71dbxIcDioL._SX3000_.jpg'
        ], action) => {
  const {type,payload} = action;
  switch (type) {
   case ADD_TO_HOME_SLIDE_IMGS:{
     return payload;
   }
   default:
     return state;
  }
 }

export const reducers={homeSlideImgsReducer:homeSlideImgsReducer};