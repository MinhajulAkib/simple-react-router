import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const{id, name, phone, website, address} = props.friend;
    const history = useHistory();

    //style
    const friendStyle ={
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>I am: {name} {id}</h2>
            <h3>Call Me:{phone}</h3>
            <h3>Visit Me: {website}</h3>
            <h4>City:{address.city}</h4>
            <Link to={url}>Visit</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2 </button>
        </div>
    );
};

export default Friend;