
const initialState = {
    searchResults: {}
};

const FlickrResultsReducer = (state=initialState, action) => {

    switch(action.type) {

        case 'FETCH_FLICKR_RESULTS': {
            state = {
                ...state,
                searchResults: action.payload.searchResults
            };

            break;
        }
    }

    return state;
};

export default FlickrResultsReducer;