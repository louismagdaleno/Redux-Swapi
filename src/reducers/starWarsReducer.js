import { FETCH_SENT, FETCH_SUCCESS, FETCH_FAIL } from "../actions";
const initialState = {
  characters: [],
  fetching: true,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_SENT:
      newState.fetching = true;
      break;
    case FETCH_SUCCESS:
      newState = { ...state, characters: action.payload, fetching: false };
      break;
    case FETCH_FAIL:
      newState = { ...state, error: action.payload, fetching: false };
      break;
    default:
      return state;
  }

  return newState;
};
