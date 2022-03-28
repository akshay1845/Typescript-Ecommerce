import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "../saga/rootSaga"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store