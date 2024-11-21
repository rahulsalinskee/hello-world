import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigateTo = useNavigate();
    const dashboardPagePath = '/dashboard';
    const homePagePath = '/home';

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
        }
        else {
            setEmailError('');
        }
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number');
        }
        else {
            setPasswordError('');
        }
        if (validateEmail(email) && validatePassword(password)) {
            console.log('Login successful');
            navigateTo(homePagePath);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <div className="flex items-center">
                                <Mail className="mr-2" />
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            {
                                emailError && <p className="text-red-500 text-xs italic">{emailError}</p>
                            }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <div className="flex items-center">
                                <Lock className="mr-2" />
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {
                                passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>
                            }
                        </div>
                        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};