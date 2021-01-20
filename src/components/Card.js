import React from 'react';

const Card = ({ id, name, username, email }) => (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`http://robohash.org/${id}?200x200`} alt='robots' />
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    </div>
)

export default Card;