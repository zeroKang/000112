
import React from 'react'
import { connect } from 'react-redux';


function CountButton (props) {

    return(
        <div>
            <button>CLICK</button>
        </div>
    )
}


export default connect()(CountButton)