import { all, fork, takeEvery } from 'redux-saga/effects';
import { FETCH_INVITATION_BY_ID } from '../actions/fetch-invitation-by-id';
import { handleFetchInvitationById } from './fetch-invitation-by-id';

export function* saga() {
    yield all([
        fork(watchFetchInvitationById),
    ]);
}

export function* watchFetchInvitationById() {
    yield takeEvery(FETCH_INVITATION_BY_ID, handleFetchInvitationById);
}
