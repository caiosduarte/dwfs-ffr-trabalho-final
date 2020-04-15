export const ADD_POINT = "ADD_POINT";
export const REMOVE_POINT = "REMOVE_POINT";

export const addPoint = point => ({
    type: ADD_POINT,
    payload: point
});

export const removePoint = point => ({
    type: REMOVE_POINT,
    payload: point
});