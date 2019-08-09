import React from 'react'


export function ConditionLink (props) {

    const originalLink = props.children
    const condition = props.condition

    return condition() === true? originalLink:null 
}