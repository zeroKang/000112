import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'


function addTodo(data) {
    
    console.log("-----------------------", data)

    return axios.post("http://localhost:8080/todo/new", data)
    .then(res => {
        console.log("post ajax data ", res)
        return res.data
    })
}

function getPage(page) {

    return axios.get("http://localhost:8080/todo/pages/" + page)
    .then(res => {
        console.log("post ajax data ", res)
        return res.data
    })
}


function* fetchAdd(action) {

    console.log("fetchAdd.........", action)

    const text = yield call (addTodo,  {title:action.payload, complete:false})
    yield put({type:"TODO_ADD_END", payload: text})

}

function* fetchList(action) {

    console.log("fetchList.........", action)

    const data = yield call (getPage,  action.payload)
    yield put({type:"TODO_LIST_END", payload: data})

}

export default {fetchAdd, fetchList};

