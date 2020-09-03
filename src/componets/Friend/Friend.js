import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props.name)
    const {name,email,id} = props.friend
        const friendStyle = {
            border: '1px solid purple',
            margin: '20px',
            padding: '20px',
            borderRadius: '20px'
        }

        const histroy = useHistory()
        const handelClick = (friendId) => {
            const url = `/friend/${friendId}`
            histroy.push(url)
        }

    return (
        <div style={friendStyle}>
            <h3>Friends Name: {name}</h3>
            <h5>Friends Email: {email}</h5>
    {/* <Link to={`/friend/${id}`}>show details{id}</Link> */}
    <button onClick={() => handelClick(id)}>Show Details</button>
        </div>
    );
};

export default Friend;