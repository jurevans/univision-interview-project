import { combineReducers } from 'redux'

import SearchReducer from './SearchReducer';
import FlickrResultsReducer from './FlickrResultsReducer';

export default combineReducers({
    search: SearchReducer,
    flickr: FlickrResultsReducer
});
