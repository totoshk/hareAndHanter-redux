import React from 'react';
import Form from '../components/forms/Form';
import { addHunter } from '../actions';
import { connect } from 'react-redux';

function HunterCreator (props) {
    let n = props.hunters.length;
    return (
        <div>
            <Form addHunter={props.addHunter} />
            <p>There are {n} hunter{n===1 ? null : "s"} at current time</p>
        </div>
        
    );
};

function stateToProps(state) {
    return {
        hunters: state.hunter
    }
}

export default connect(stateToProps, {addHunter})(HunterCreator);