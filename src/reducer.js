import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as invitationReducer } from './invitation/reducer';

export const reducer = combineReducers({
    form: formReducer,
    invitation: invitationReducer,
});
