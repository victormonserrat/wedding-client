import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { saga as guestSaga } from './guest/sagas';
import { saga as invitationSaga } from './invitation/sagas';

export const sagaMiddleware = createSagaMiddleware();

export function* saga() {
    yield all([
        fork(guestSaga),
        fork(invitationSaga),
    ]);
}
