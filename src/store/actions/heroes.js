import { SELECT_HEROES } from './actionTypes';

export const selectHeroes = (key) => {
    return {
        type: SELECT_HEROES,
        heroKey: key
    };
};