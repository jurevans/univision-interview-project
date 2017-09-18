
const initialState = {
    text: ''
};

const SearchReducer = (state=initialState, action) => {

    switch(action.type) {
        case 'SEARCH_TEXT_ENTERED': {
            console.log('SEARCH_TEXT_ENTERED');

            state = {
                ...state,
                text: action.payload.text
            };

            break;
        }

        case 'FETCH_FLICKR_RESULTS': {
            console.log('FETCH_FLICKR_RESULTS');

            state = {
                ...state,
                searchResults: action.payload.searchResults
            };

            break;
        }
    }

    return state;
};

export default SearchReducer;