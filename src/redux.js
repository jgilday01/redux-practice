import { combineReducers, createStore } from 'redux';

// actions.js
export const activateTest = test => ({
    type: 'ACTIVATE_GEOD',
    test,
});

export const closeTest= () => ({
    type: 'CLOSE_GEOD',
});

// reducers.js
export const test = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_GEOD':
            return action.test;
        case 'CLOSE_GEOD':
            return {};
        default:
            return state;
    }
};

export const reducers = combineReducers({
    test
});

// store.js
export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
}

export const store = configureStore();
