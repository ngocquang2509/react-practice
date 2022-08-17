import {ADD_ITEM, SET_ITEM_INPUT, EDIT_ITEM, DELETE_ITEM} from "./constant";

export const setItemInput = payload => ({
    type: SET_ITEM_INPUT,
    payload
})

export const addItem = payload => ({
    type: ADD_ITEM,
    payload
})

export const editItem = payload => ({
    type: EDIT_ITEM,
    payload
})

export const deleteItem = payload => ({
    type: DELETE_ITEM,
    payload
})