import React from 'react'

const Register = () => {
    return (
        <div>
            <h2 className='text-3xl'>Register</h2>
            <span>--------</span>
            <div>
                <label>First Name:</label>
                <input type='text' />
            </div>
            <div>
                <lable>Last Name:</lable>
                <input type='text'/>
            </div>
            <div>
                <lable>Email:</lable>
                <input type='text'/>
            </div>
            <div>
                <lable>Password:</lable>
                <input type='text'/>
            </div>
            <div>
                <lable>Conform Password</lable>
                <input type='text'/>
            </div>
        </div>
    )
}

export default Register
