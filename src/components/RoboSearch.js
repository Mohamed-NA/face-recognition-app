import React from 'react';
import './Robosearch.css';

const RoboSearch = ({ searchchange }) => {
    return (
        <div className='pa3'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchchange}
            />
        </div>
    );
}

export default RoboSearch;