import React from "react";
import { connect } from 'react-redux';
import { changePosition } from '../actions';
require ('../style.scss');


class Hare extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => {
            this.props.changePosition();
        }, 1000);        
    }


    render(){
        console.log('this.props', this.props);
        return (
            <div className = 'field'>
                <div id="hare" style={{top: this.props.position.y + 'px', left: this.props.position.x + 'px'}}></div>
            </div>
        )
    }
}



function stateToProps(state) {
    return {
        position: state
    }
}

// 7. Подключаем наш actionCreator к компоненту. 
// Первый параметр - функция, возвращающая объект state из store. Второй - actionCreator

export default connect(stateToProps, {changePosition})(Hare); 

 