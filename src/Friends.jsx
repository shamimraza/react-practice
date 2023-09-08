import React, { useEffect, useState } from 'react';
import './Friends.css'
import Friend from './Friend';
const Friends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div className='friends'>
            <h3>friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend
                    friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;