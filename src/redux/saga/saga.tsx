import { setApi } from "../actions/action";
import {call, takeEvery, put} from 'redux-saga/effects'

const api = async () => {
    const response = await fetch("http://localhost:3000/products")
    const data  = await response.json();
    return data
}

function* fetchApi():any{

    const data = yield call(api)
    
    yield put(setApi(data))

}

export function* ApiCalling(){
    yield takeEvery("FETCH_DATA",fetchApi)
}