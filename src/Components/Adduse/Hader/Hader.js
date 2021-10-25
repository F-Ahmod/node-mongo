import React from 'react';
import { Link } from 'react-router-dom';

const Hader = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/adduser">Add User</Link>
            <Link to="/users">Users</Link> 
        </div>
    );
};

export default Hader;