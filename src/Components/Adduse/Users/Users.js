import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    const handeldelete = id =>{
        const proced=window.confirm('sure you want to delete');
        if(proced){
            const url=`http://localhost:5000/users/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                alert('delete sucessfuly')
                const reminingUsers=user.filter(user=> user._id !==id)
                setUser(reminingUsers)
            }
        });
        }
      
    }

    
    return (
        <div>
            <h2>Users::{user.length}</h2>
            {
                user.map(user =><li
                key={user._id}
                >name-{user.name}::::email{user.email}
                <button onClick={()=>handeldelete(user._id)}>X</button>
               <Link to={`/users/update/${user._id}`}><button>update</button></Link>
                </li>)
            }
        </div>
    );
};

export default Users;