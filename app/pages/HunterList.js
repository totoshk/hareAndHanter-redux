import React from 'react';
import { connect } from 'react-redux';
import { changePosition, addHunter } from '../actions';
// import HunterItem from '../components/list/HunterItem';
import HunterPreview from '../components/hunters/HunterPreview';

function HunterList (props) {
    if (props.hunters.length === 0) {
        return (
            <p>There is no hunters!</p>
        )
    }
    return (
        <div>
            {
                props.hunters.map((hunter, i) => {
                    return (
                        <HunterPreview hunter={hunter}>
                            <p className="hunter__info form-label">Age:<span> {hunter.age}</span></p>
                            <p className="hunter__info form-label">Gender:<span> {hunter.gender}</span></p>
                            <p className="hunter__info form-label">Experience<span> {hunter.experience}</span></p>
                        </HunterPreview>
                    )
                })
            }
        </div>
    )
};

function stateToProps(state) {
    return {
        hunters: state.hunter,
        posOfHare: state.positionApp
    }
}

export default connect(stateToProps, {})(HunterList);