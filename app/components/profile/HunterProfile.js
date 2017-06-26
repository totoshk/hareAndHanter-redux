import React from 'react';
import { connect } from 'react-redux';
import { changePosition, addHunter } from '../../actions';


function HunterProfile(props) {
    return (
       <p> Hello!</p>
    )
}

function stateToProps(state) {
    return {
        hunter: state.hunter,
        posOfHare: state.positionApp
    }
}

export default connect(stateToProps, {addHunter})(HunterProfile);