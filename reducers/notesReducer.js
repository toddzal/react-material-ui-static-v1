import {GET_NOTES} from '../actionTypes';

export function notesReducer(state = {}, action){
    switch(action.type){
        case GET_NOTES:
            return action.payload;
        default:
            return state;

    }
}