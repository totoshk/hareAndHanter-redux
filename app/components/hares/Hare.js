import React from "react";
import { connect } from 'react-redux';
import { changePosition } from '../../actions';
require ('../../style.scss');


class Hare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: null
        }
    }

    componentDidMount() {
        let interval = setInterval(() => {
            this.props.changePosition();
        }, 1000);
        this.setState({
            interval: interval
        })
    }

    componentWillUnmount() {
       clearInterval(this.state.interval)
    }

    render(){
        return (
            <div id="hare" style={{top: this.props.position.y + 'px', left: this.props.position.x + 'px'}}></div>
        )
    }
}



function stateToProps(state) {
    return {
        position: state.positionApp
    }
}

export default connect(stateToProps, {changePosition})(Hare);