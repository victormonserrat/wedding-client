import { all, fork, takeEvery } from 'redux-saga/effects';
import { UPDATE_GUEST_BY_ID_WITH_VALUES } from '../actions/update-guest-by-id-with-values';
import { handleUpdateGuestByIdWithValues } from './update-guest-by-id-with-values';

export function* saga() {
    yield all([
        fork(watchUpdateGuestByIdWithValues),
    ]);
}

export function* watchUpdateGuestByIdWithValues() {
    yield takeEvery(UPDATE_GUEST_BY_ID_WITH_VALUES, handleUpdateGuestByIdWithValues);
}
