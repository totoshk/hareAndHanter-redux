import React from "react";
var PropTypes = require('prop-types');
require ('../../style.scss');



const HunterPreview = (props) => {
    let hunter = props.hunter;
    return (
        <div className="hunter clearfix">
            <div className='avatar hunter__avatar'>
                <img src={hunter.imgSrc} alt="avatar"/>
            </div>
            <div className="hunter-details">
                <p className="hunter__info form-label">Nickname:<span> {hunter.name}</span></p>
                {props.children}
            </div>
        </div>
    )
}

HunterPreview.propTypes = {
    hunter: PropTypes.object.isRequired
}

export default HunterPreview;