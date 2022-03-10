import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);

    };

    const userValidateFN = (e) => {
        setFirstName(e.target.value);
        if (firstName.length < 2) {
            setFirstNameError('First name must be at least 2 characters');
        } else {
            setFirstNameError('');
        }
    };


    const userValidateLN = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError('Last name must be at least 2 characters');
        }
    };

    const userValidateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError('Email must be at least 5 characters');
        }
    };

    const userValidatePassword = (e) => {
        setPassword(e.target.value);
        if (password.length < 5) {
            setPasswordError('Must be at least 8 characters');
        } else{
            setPasswordError('');
        }
    };

    
    const userValidateConfirm = (e) => {
        setPasswordConfirm(e.target.value);
        if (password !== passwordConfirm) {
            setPasswordConfirmError('Passwords must match')
        } else {
            setPasswordConfirmError('')
        }

    };




    return (
        <div className='d-flex justify-content-center'>
            <h3>New User</h3>
            <form onSubmit={createUser}>
                <div>
                    <label class="form-label">First name: </label>
                    <input className='m-2' type="text" value={firstName} onChange={userValidateFN} /> {
                        firstNameError ?
                            <p style={{ color: 'red' }}>{firstNameError}</p> : ''
                    }
                </div>
                <div>
                    <label class="form-label">Last name: </label>
                    <input className='m-2' type="text" value={lastName} onChange={userValidateLN} />{
                        lastNameError ?
                            <p style={{ color: 'red' }}>{lastNameError}</p> : ''
                    }
                </div>
                <div>
                    <label class="form-label">Email Address: </label>
                    <input className='m-2' type="text" value={email} onChange={userValidateEmail} />{
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> : ''
                    }
                </div>
                <div>
                    <label class="form-label">Password: </label>
                    <input className='m-2' type="text" value={password} onChange={userValidatePassword} />{
                        passwordError ?
                        <p style={{ color: 'red' }}>{passwordError}</p> : ''
                }
                </div>
                <div>
                    <label class="form-label">Confirm Password: </label>
                    <input className='m-2' type="text" value={passwordConfirm} onChange={userValidateConfirm} />{
                        passwordConfirmError ?
                        <p style={{ color: 'red' }}>{passwordConfirmError}</p> : ''
                }
                </div>
                <input type="submit" value="Create User" />
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