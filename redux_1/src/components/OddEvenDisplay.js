import React,{Component} from 'react'
import {connect} from 'react-redux'

function OddEvenDisplay(props){

    const text = props.count % 2 === 0 ? "EVEN" : "ODD"

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )

}

const mapStateToProps = ( state ) => {

    console.log("ODDEVEN",state)

    return {count: state.count}
}

export default connect(mapStateToProps)(OddEvenDisplay)