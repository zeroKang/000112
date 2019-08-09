import React from 'react'
import { Route, Link } from 'react-router-dom'


export default function(props) {

    if(props.condition()){
        return props.children
    }else {
        return props.fail
    }
}
