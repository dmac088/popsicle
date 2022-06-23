import {
    GET_BILLING_ADDRESS_STARTED,
    GET_BILLING_ADDRESS_SUCCESS,
    GET_BILLING_ADDRESS_FAILURE,
  } from "../actions/ActionTypes";
  
  const initialState = {
      loading: true,
      error: {},
  };
  
  export default function (state = initialState, action) {
  
    switch (action.type) {

      case GET_BILLING_ADDRESS_STARTED:
        return {
          ...state,
          ...action.payload,
      }
  
      case GET_BILLING_ADDRESS_SUCCESS:
        return {
          ...state,
          ...action.payload,
      }
  
      case GET_BILLING_ADDRESS_FAILURE:
        return {
          ...state,
          error: action.payload.error
      }
  
      default:
        return state;
    }
  }
   