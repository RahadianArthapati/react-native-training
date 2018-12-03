import { createStore, combineReducers } from 'redux';

import heroesReducer from './reducers/heroes';

const rootReducer = combineReducers({
    heroes: heroesReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;