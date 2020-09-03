import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const FriendsDetails = () => {
    const {friendId} = useParams()
    const [friend,setFriend] = useState({})
    const [address,setAddress] = useState('');

   useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setFriend(data);
        setAddress(data.address);
    })
   },[])
   
   const {name,email,phone} = friend; 
//    let address = friend.address;
//    const {city} = address;
   console.log(address);
    return (
        <div>
            <h1>Friends Details Page.</h1>
            <h3>Friend Id: {friendId}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>City: {address.city}</p>
            <p>Phone: {phone}</p>
            {/* <p>Company: {company.name}</p> */}
        </div>
    );
};

export default FriendsDetails;