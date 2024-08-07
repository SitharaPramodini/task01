import React, { useState } from 'react'
import logo from '../img/logo.png'
import image from '../img/image.png'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch('https://intern-evaluate.talentfort.live/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            alert(`Login successful! Welcome ${data.user.first_name} ${data.user.last_name}
                Email: ${data.user.email}
                Phone number: ${data.user.phone_number}`);
        } else {
            alert('Login failed. Please check your credentials.');
        }
        } catch (error) {
        console.log(error);
        alert('An error occurred. Please try again.');
        }
    };

  return (
    <div className='split' >
        <div className='left'>
            <img src={image} alt="Illustration" className="left-image"/>
        </div>
        
        <div className='right'>
            <img class="rounded-t-lg" src={logo} alt="" />

            <h1 className='login-title'>Login</h1>
            <p className='login-subtitle'>Login to access your  account</p>

            <form class="max-w-sm mt-9" onSubmit={handleSubmit}>
            <div class="mb-5">
                <label for="email" class="input-label">Email</label>
                <input
              type="email"
              id="email"
              className="custom-input"
              placeholder="test@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div class="mb-5">
            <label for="password" class="input-label">Password</label>
            <div class="password-wrapper">
            <input
                type="password"
                id="password"
                className="custom-input"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
        </div>
            <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Login</button>
            </form>

        </div>
    </div>
  )
}

export default Login