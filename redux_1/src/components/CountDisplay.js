import React, {Component} from 'react'
import {connect} from 'react-redux'

class CountDisplay extends Component {

    render() {
        const count = this.props.count

        return(
            <div>
                <h1>{count}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log("mapStateToProps:", state)

    return {count:state.count}
}

export default connect(mapStateToProps)(CountDisplay)

