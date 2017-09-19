
const initialState = {
    loaded: false,
    loading: false,
    searchResults: null,
    error: null
};

const FlickrResultsReducer = (state=initialState, action) => {

    switch(action.type) {

        case 'FETCH_FLICKR_RESULTS': {
            state = {
                ...state,
                loaded: false,
                loading: true,
                error: null,
                searchResults: null
            };

            break;
        }

        case 'FETCH_FLICKR_RESULTS_FULFILLED': {
            state = {
                ...state,
                loaded: true,
                loading: false,
                error: null,
                /* NOTE: Below, we need to validate the search input as well, so this action doesn't dispatch in the first place */
                searchResults: action.payload.data && action.payload.data.photos && action.payload.data.photos.photo || null,
                /* NOTE: We could track pages as well for pagination, e.g.:
                 * page: action.payload.data.photos.page,
                 * pages: action.payload.data.photos.pages
                 * etc.
                 */
            };

            break;
        }

        case 'FETCH_FLICKR_RESULTS_REJECTED': {
            state = {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload,
                searchResults: null
            };

            break;
        }
    }

    return state;
};

export default FlickrResultsReducer;