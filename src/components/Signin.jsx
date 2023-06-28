import React, { useEffect, useState } from 'react';
import { auth, provider } from './Config';
import { signInWithPopup } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Home from './Home';

const Signin = () => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        const userEmail = localStorage.getItem('Email');
        if (userEmail) {
            const password = prompt('Please enter your password');
            signInWithEmailAndPassword(auth, userEmail, password)
                .then((userCredential) => {
                    setValue(userEmail);
                })
                .catch((error) => {
                    console.log('Sign-in error:', error);
                    // Handle sign-in error here if needed
                });
        } else {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const userEmail = result.user.email;
                    setValue(userEmail);
                    localStorage.setItem('Email', userEmail);
                })
                .catch((error) => {
                    console.log('Sign-in error:', error);
                    // Handle sign-in error here if needed
                });
        }
    };

    useEffect(() => {
        setValue(localStorage.getItem('Email'));
    }, []);

    return (
        <div className='flex sm:p-[20px]'>
            {value ? (
                <Home />
            ) : (
                <button onClick={handleClick} className='bg-green-600  sm:p-[1em] sm:px-[2em]'>
                    Sign in with Google
                </button>
            )}
        </div>
    );
};

export default Signin;
