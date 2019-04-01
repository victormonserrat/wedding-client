import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';
import { saga, sagaMiddleware } from './saga';

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(saga);
