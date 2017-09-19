import configureStore from 'redux-mock-store'

const middlewares = [];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
const success = () => {
    return {
        type: 'FETCH_FLICKR_RESULTS_FULFILLED'
    }
};

const fetchData = () => {
    return dispatch => {
        return fetch('./flickr-response-mock.json')
            .then(() => dispatch(success()))
    };
};

it('should execute fetch data', () => {
    const store = mockStore({});

    // Return the promise
    return store.dispatch(fetchData())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(success());
        })
});