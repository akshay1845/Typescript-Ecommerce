import {all} from "redux-saga/effects"
import {ApiCalling} from "../saga/saga"

export default function* rootSaga(){
    yield all([ApiCalling()])
}