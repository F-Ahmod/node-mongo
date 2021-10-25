import React, { useRef } from 'react';

const Adduser = () => {
    const nameRef=useRef();
    const emailRef=useRef();
    const handel= e=>{
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const newUser={name,email};
        fetch('http://localhost:5000/users',{
            method:'POST',
           headers:{ 'content-type':'application/json'},
           body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
                   if(data.inserted_Id){
                       alert('sucess')
                       // e.target.reset()
                   }
               })
        e.preventDefault();
    }
    return (
        <div>
            <h2>please Add an User</h2>
            <form onSubmit={handel}>
               
               <input type="text"  ref={nameRef}/>
                <input type="email" name=""   id="" ref={emailRef}/>
                <input type="submit" value="add User" />
            </form>
        </div>
    );
};

export default Adduser;