import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    const history =useHistory();
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])

    const handleClick = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h3>Friend detail coming soon:{friendId}</h3>
            <h3>{friend.name}</h3>
            <h3>{friend.phone}</h3>
            <h3>{friend.website}</h3>
            <h3>works at: {friend.company?.name}</h3>
            <button onClick={handleClick}>See all Friends</button>
        </div>
    );
};

export default FriendDetail;