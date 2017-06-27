import React from 'react';
import { connect } from 'react-redux';
import { deleteHunter } from '../actions';
import HunterPreview from '../components/hunters/HunterPreview';

require ('../style.scss');

function HunterList (props) {
    if (props.hunters.length === 0) {
        return (
            <p>There is no hunters!</p>
        )
    }
    return (
        <div>
            <h1>List of all hunters</h1>
            {
                props.hunters.map((hunter, i) => {
                    return (
                        <HunterPreview hunter={hunter} key={i}>
                            <p className="hunter__info form-label">Age:<span> {hunter.age}</span></p>
                            <p className="hunter__info form-label">Gender:<span> {hunter.gender}</span></p>
                            <p className="hunter__info form-label">Experience<span> {hunter.experience}</span></p>
                            <button type="button"
                                className="delete-btn" 
                                onClick={()=>{props.deleteHunter(i)}}>Delete this hunter</button>
                        </HunterPreview>
                    )
                })
            }
        </div>
    )
};

function stateToProps(state) {
    return {
        hunters: state.hunter
    }
}

export default connect(stateToProps, {deleteHunter})(HunterList);