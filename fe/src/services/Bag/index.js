import { instance as axios } from "../../components/Layout/Helpers/api";
import { history } from '../../components/Layout/Helpers/route';
import { getAccountPath } from "../../components/Layout/Helpers/route";
import { matchPath } from 'react-router';
import store from '../../store';
import {
    getBagStarted,
    getBagSuccess,
    getBagFailure,
    emptyBag
} from '../../actions/BagActions';
import {
    emptyBagContents,
    getBagContentsStarted,
    getBagContentsSuccess,
    getBagContentsFailure,
    addBagItemStarted,
    addBagItemSuccess,
    addBagItemFailure,
    removeBagItemStarted,
    removeBagItemSuccess,
    removeBagItemFailure,
    updateBagItemStarted,
    updateBagItemSuccess,
    updateBagItemFailure,
} from '../../actions/BagContentsActions';


const isAuthenticated = () => {
    const authenticated = store.getState().session.authenticated;

    if (!authenticated) {
        const match = matchPath(history.location.pathname, {
            path: "/:lang/:curr",
            exact: false,
            strict: true
        });
        history.push(getAccountPath(match));
    }
    return authenticated;
}

export const addToBag = (productCode, quantity = 1) => {
    if (isAuthenticated()) {
        store.dispatch(addItem({
            "itemUPC": productCode,
            "itemQty": quantity,
        }));
    }
}

const addItem = (item) => {
    return (dispatch, getState) => {
        dispatch(addBagItemStarted());
        return axios.post(getState().bag._links.addItem.href, item)
            .then(() => {
                dispatch(addBagItemSuccess());
            })
            .then(() => {
                dispatch(getBag());
            })
            .catch(() => {
                dispatch(addBagItemFailure());
            });
    }
}

export const removeItem = (itemCode) => {
    return (dispatch, getState) => {
        dispatch(removeBagItemStarted());
        return axios.get(getState().bag._links.removeItem.href.replace('{itemCode}', itemCode))
            .then(() => {
                dispatch(removeBagItemSuccess());
            })
            .then(() => {
                dispatch(getBag());
            })
            .catch(() => {
                dispatch(removeBagItemFailure());
            });
    }
}

export const updateItem = (item) => {
    return (dispatch, getState) => {
        dispatch(updateBagItemStarted());
        return axios.post(getState().bag._links.updateItem.href, item)
            .then(() => {
                dispatch(updateBagItemSuccess());
            })
            .then(() => {
                dispatch(getBag());
            })
            .catch(() => {
                dispatch(updateBagItemFailure());
            });
    }
}

export const getBag = () => {
    return (dispatch, getState) => {
        dispatch(getBagStarted());
        return axios.get(getState().discovery.links.getBag.href)
            .then((payload) => {    
                return payload.data;
            }).then((response) => {
                dispatch(getBagSuccess(response));
            }).catch((error) => {
                dispatch(getBagFailure(error.response));
            });
    }
}

export const clearBag = () => {
    return (dispatch) => {
        dispatch(emptyBag());
        dispatch(emptyBagContents());   
    }
}

//we need to inject the dependencies into the function
export const getBagContents = () => {
    return (dispatch, getState) => {
        dispatch(getBagContentsStarted());
        return axios.get(getState().bag._links.bagContents.href)
            .then((payload) => {
                return (payload.data._embedded)
                    ? payload.data._embedded.bagItemResources
                    : [];
            }).then((items) => {
                dispatch(getBagContentsSuccess(items));
            }).catch((error) => {
                dispatch(getBagContentsFailure(error.response));
            });
    }
}



