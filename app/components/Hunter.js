import React from "react";
import { connect } from 'react-redux';
import { changePosition } from '../actions';
require ('../style.scss');


class Hunter extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        let posOfHare = this.props.state.positionApp;
      return (
         <div className="hunter-block">
            <div id="hunter">
                <p>Hare position is {posOfHare.x} and {posOfHare.y}</p>
            </div>
         </div>
      );
   }
};

function stateToProps(state) {
    return {state}
}

export default connect(stateToProps, null)(Hunter); 