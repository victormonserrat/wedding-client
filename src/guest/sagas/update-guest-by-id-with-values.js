import { call, put } from 'redux-saga/effects';
import { putGuestByIdWithValues } from '../api/put-guest-by-id-with-values';
import { getInvitationById } from '../../invitation/api/get-invitation-by-id';
import {
    fetchInvitationByIdFailure,
    fetchInvitationByIdSuccess,
} from '../../invitation/actions/fetch-invitation-by-id';

export function* handleUpdateGuestByIdWithValues({ id, values }) {
    try {
        yield call(putGuestByIdWithValues, id, {
            ...values,
            song: values.song ? values.song.trim() ? values.song : null : null,
        });

        const invitationId = localStorage.getItem('id');
        const { data: { comment, guests } } = yield call(getInvitationById, invitationId);

        yield put(fetchInvitationByIdSuccess(comment, guests));
    } catch({ message }) {
        if (message.includes(404)) {
            yield put(fetchInvitationByIdFailure(404));

            return;
        }

        yield put(fetchInvitationByIdFailure(500));
    }
}