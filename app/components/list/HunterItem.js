import React from 'react';

function HunterItem (props) {
    return (
        <div>
            {props.hunters.map((hunter, i) => { 
                return(
                    <div key={i} className='hunter clearfix'>
                        <div className='avatar hunter__avatar'>
                            <img src={hunter.imgSrc} alt="avatar"/>
                        </div>
                        <div className="hunter-details">
                            <p className="hunter__info form-label">Nickname:<span> {hunter.name}</span></p>
                            <p className="hunter__info form-label">Age:<span> {hunter.age}</span></p>
                            <p className="hunter__info form-label">Gender:<span> {hunter.gender}</span></p>
                            <p className="hunter__info form-label">Experience<span> {hunter.experience}</span></p>
                        </div>
                    </div>)
            })}
        </div>
    );
};

export default HunterItem;