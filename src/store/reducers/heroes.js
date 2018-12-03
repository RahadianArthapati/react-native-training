import {
    SELECT_HEROES
  } from "../actions/actionTypes";
  
  const initialState = {
    heroes: [],
    selectedHeroes: null
  };

  const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case SELECT_HEROES:
        return {
          ...state,
          selectedHeroes: state.heroes.find(hero => {

            return hero.key === action.heroKey;
          })
        };

      default:
        return state;
    }
  };

  export default reducer;