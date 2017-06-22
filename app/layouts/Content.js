import React from 'react';

function Content (props) {
    return (
        <main className="main-content">
            {props.children}
        </main>
    )
};

export default Content;