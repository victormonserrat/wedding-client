import {
    FETCH_INVITATION_BY_ID,
    FETCH_INVITATION_BY_ID_FAILURE,
    FETCH_INVITATION_BY_ID_SUCCESS,
} from './actions/fetch-invitation-by-id';

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_INVITATION_BY_ID: {
            return {
                ...state,
                fetching: true,
            };
        }
        case FETCH_INVITATION_BY_ID_FAILURE: {
            return {
                ...state,
                guests: action.guests,
                fetching: false,
                error: action.error,
            };
        }
        case FETCH_INVITATION_BY_ID_SUCCESS: {
            return {
                ...state,
                comment: action.comment,
                guests: action.guests,
                fetching: false,
            };
        }
        default: {
            return state;
        }
    }
};

const initialState = {
    comment: undefined,
    guests: [],
    fetching: true,
    error: undefined,
};
