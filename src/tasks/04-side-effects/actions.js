import {fetchAmount} from "./api";
import store from "./store";

export function increment() {
    return {type : "INCREMENT"};
}

export function amountRequestSucceeded(amount) {
    return {type : "AMOUNT_REQUEST_SUCCEEDED", amount};
}

export function amountRequestFailed(error) {
    return {type : "AMOUNT_REQUEST_FAILED", error};
}


export function incrementThreeTimes() {
    return (dispatch) => {
        for (let i = 0; i < 3; i += 1){
        dispatch(increment());
        }
    }
}

export function dispatchIncrementIfEven() {
    return (dispatch, getState) => {
        if (getState().counter % 2 === 0) dispatch(increment());
    }
}


export function fetchAndLoadAmount() {
    return (dispatch) => {
        fetchAmount()
            .then(response => dispatch(amountRequestSucceeded(response)))
            .catch(error => dispatch(amountRequestFailed(error)));
    };
}