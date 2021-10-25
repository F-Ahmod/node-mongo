import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user,setUser]=useState('');
    const {id}=useParams({})
    useEffect(()=>{
        const url=(`http://localhost:5000/users/${id}`)
        fetch(url)
        .then(res=>res.json())
        .then(data =>setUser(data));

    },[]);
    const handelNameChange= e =>{
        const updateName=e.target.value;
        const updateUser={name:updateName,email: user.email}
        setUser(updateUser)

    }
    const handelEmailChange= e=>{
        const updateEmail=e.target.value;
        // const updateUserEmail={...user};
        // updateUserEmail.email=updateEmail;
        const updateUser={name: user.name , email:updateEmail}
        setUser(updateUser);
    }
    const handelupdate= e=>{
        const url=(`http://localhost:5000/users/${id}`);
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount >0){
                alert('update successfully')
            }
        })

        e.preventDefault()
    }
    return (
        <div>
            <h2>update:{user.name}</h2>
            <h2>update:{user.email}</h2>
            <small>user Id:{id}</small>
            <form onSubmit={handelupdate}>
               <input type="text" onChange={handelNameChange} value={user.name || ''} />
            <input type="email" onChange={handelEmailChange} value={user.email || ''} />
            <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateUser;