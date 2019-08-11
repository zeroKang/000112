import React from 'react'


export default function ConditionLink (props) {

    const originalLink = props.children
    const condition = props.condition

    return condition() === true? originalLink:null 
}