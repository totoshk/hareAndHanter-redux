import React from 'react';
import Field from '../components/field/field';
import Hare from '../components/hares/Hare';
import HunterPreview from '../components/hunters/HunterPreview';
import { connect } from 'react-redux';

function HarePage (props) {
    return (
        <div className='hare-page'>
            <Field>
                <Hare />
            </Field>
            
            {
                props.hunters.map((hunter, i) => {
                    return (
                        <HunterPreview hunter={hunter} key={i}>
                            <p className="hunter__info form-label">Hare position is {props.posOfHare.x} and {props.posOfHare.y}</p>
                        </HunterPreview>
                    )
                })
            }
        </div>
    );
};

function stateToProps(state) {
    return {
        hunters: state.hunter,
        posOfHare: state.positionApp
    }
}

export default connect(stateToProps, {})(HarePage);