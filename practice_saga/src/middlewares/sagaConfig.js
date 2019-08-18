import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function getData() {
    
    return axios.get("http://localhost:8080/sample/hello")
    .then(res => {
        console.log("get ajax data ", res)
        return res.data
    })
}

function* fetchHello(action) {

    const text = yield call (getData)
    yield put({type:"FETCH_END", payload: text})

}

function* sageConfig(){

    yield takeEvery("REQUEST_FETCH", fetchHello)
}

export default sageConfig;