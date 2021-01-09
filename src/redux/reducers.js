import { combineReducers } from 'redux';

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
