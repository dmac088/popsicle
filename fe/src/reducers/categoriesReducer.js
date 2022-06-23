import { GET_CATEGORIES_STARTED,
         GET_CATEGORIES_SUCCESS,
         GET_CATEGORIES_FAILURE } from "../actions/ActionTypes";

  const initialState = {
    list: [] ,
    loading: true,
    error: {},
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CATEGORIES_STARTED:
        return {
          ...state,
          ...action.payload,
        }

      case GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false,
        };

      case GET_CATEGORIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }

      default:
        return state;
    }
  }
