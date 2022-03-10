import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div className='d-flex justify-content-center'>
        <h3>New User</h3>
        <form onSubmit={ createUser }>
        <div>
            <label class="form-label">First name: </label> 
            <input className='m-2' type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
        </div>
        <div>
            <label class="form-label">Last name: </label> 
            <input className='m-2' type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
        </div>
        <div>
            <label class="form-label">Email Address: </label> 
            <input className='m-2' type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div>
            <label class="form-label">Password: </label>
            <input className='m-2' type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
        </div>
        <div>
        <label class="form-label">Confirm Password: </label>
        <input className='m-2' type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
    </div>
    </form>
    <div>
    <h3>Your User Information:</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
    </div>
        </div>

    );
};
    
export default UserForm;