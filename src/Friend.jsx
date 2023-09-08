import React from 'react';

const Friend = ({ friend }) => {
    console.log(friend);
    return (
        <div className='friends'>
            <h3>Title {friend.title}:</h3>
            <p>{friend.body}</p>
            <p>User Id : {friend.id}</p>

        </div>
    );
};

export default Friend;