import React, {useState} from 'react'

const UserForm = (props) => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const [formError, setFormError] = useState({
        firstName: true,
        lastName: true,
        email: true
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        }

    const handleSubmission = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value 
        })
    

        if(name === "firstName" && value.length > 2){
            setFormError({
                ...formError,
                firstName: false
            })
        }
        if(name === "lastName" && value.length > 2){
            setFormError({
                ...formError,
                lastName: false
            })
        }
        if(name === "email" && /^\w+([\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formState.emailAddr.value)){
            setFormError({
                ...formError,
                email: false
            })
        }
    
};


    return (
        <div className='d-flex justify-content-center'>
        <h3>User Form</h3>
        <div>
        <form onSubmit={handleSubmit}>
        <div>
        <label className='form-label'>First Name:</label>
        <input className='m-2' type='text' onChange={handleSubmission} value={formState.firstName} />
        {formError.firstName && 
            <p>First Name must be at least 2 characters</p>
        }
        </div>
        <div>
        <label className='form-label'>Last Name:</label>
        <input className='m-2' type='text' value={formState.lastName} onChange={handleSubmission}/>
        {formError.lastName && 
            <p>Last Name must be at least 2 characters</p>
        }
        </div>
        <div>
        <label className='form-label'>Email:</label>
        <input className='m-2' type='text' value={formState.email} onChange={handleSubmission}/>
        {formError.email && 
            <p>Email must be valid</p>
        }
        </div>
        <button>Submit</button>
        </form>
        </div>
        </div>
        
    )
};

export default UserForm