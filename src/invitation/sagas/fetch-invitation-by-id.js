import { call, put } from 'redux-saga/effects';
import { getInvitationById } from '../api/get-invitation-by-id';
import {
    fetchInvitationByIdFailure,
    fetchInvitationByIdSuccess,
} from '../actions/fetch-invitation-by-id';

export function* handleFetchInvitationById({ id }) {
    try {
        const { data: { comment, guests } } = yield call(getInvitationById, id);

        if (guests.length < 1) {
            yield put(fetchInvitationByIdFailure(404));

            return;
        }

        yield put(fetchInvitationByIdSuccess(comment, guests));
        localStorage.setItem('id', id);
    } catch({ message }) {
        if (message.includes(404)) {
            yield put(fetchInvitationByIdFailure(404));

            return;
        }

        yield put(fetchInvitationByIdFailure(500));
    }
}
