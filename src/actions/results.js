import TrueToYourShelfApi from "../api/TrueToYourShelfApi";
import { SET_QUERY } from './actionTypes'

let query = "";

export const setQuery = (content) => ({
    type: SET_QUERY,
    payload: {
        query: content.query,
        content,
    }
})