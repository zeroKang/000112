import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects';



function* fetchData(action) {
    
    console.log('fetchData', action)

    const requestFetch = () => { 
        console.log("requestFetch", action)
        
        return axios.get('http://localhost:8080/todo/pages/' + action.payload.page)
         .then(res => res.data)
    }
    
    try {
        const payload = yield call(requestFetch)
        console.log("payload", payload)
        yield put({type:'SUCCESS_LOAD', payload:payload})
    } catch (e) {
        console.log("fail Fetch")
        yield put({type:'FAIL_LOAD', payload:e.message}); // ⑤
    }
}

function* mySaga() {
    yield takeEvery('REQUEST_FETCH', fetchData); // ①
}

export default mySaga