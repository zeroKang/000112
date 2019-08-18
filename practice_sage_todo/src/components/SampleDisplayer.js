import React, {Component} from 'react'

import {connect} from 'react-redux'


class SampleDisplayer extends Component {

    render() {
        return(
            <div>

                <h1>Text ---  {this.props.text}</h1>

            </div>
        )
    }

}

const mapStateToProps =  ({sampleReducer}) => {

    console.log("mapStateToProps...................", sampleReducer)

    return {
        text: sampleReducer.text
    }

}


export default connect(mapStateToProps)(SampleDisplayer)

