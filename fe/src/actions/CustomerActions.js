import {
  GET_CUSTOMER_STARTED,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE,
  REGISTER_CUSTOMER_STARTED,
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER_FAILURE
} from "./ActionTypes";

export const regCustomerStarted = () => ({
  type: REGISTER_CUSTOMER_STARTED,
  payload: {
    loading: true,
  }
});

export const regCustomerSuccess = customer => ({
  type: REGISTER_CUSTOMER_SUCCESS,
  payload: {
    loading: false,
    ...customer,
  }
});

export const regCustomerFailure = error => ({
  type: REGISTER_CUSTOMER_FAILURE,
  payload: {
    error,
    loading: false,
  }
});

export const getCustomerStarted = () => ({
  type: GET_CUSTOMER_STARTED,
  payload: {
    loading: true,
  }
});

export const getCustomerSuccess = customer => ({
  type: GET_CUSTOMER_SUCCESS,
  payload: {
    ...customer,
    loading: false,
  }
});

export const getCustomerFailure = error => ({
  type: GET_CUSTOMER_FAILURE,
  payload: {
    error,
    loading: false,
  }
});