import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '73.5vh' }} >
            {props.children}
        </div>
    );
};

export default Scroll;