import React, { useState } from 'react';
import axios from 'axios';
import logo from '../img/logo.png';
import image from '../img/image.png';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://intern-evaluate.talentfort.live/signup', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password,
        confirm_password: confirmPassword
      });

      if (response.status === 200) {
        alert(`signup successful! Welcome ${firstName} ${lastName}
          Email: ${email}
          Phone number: ${phoneNumber}`);
      }
    } catch (err) {
      alert('Failed to create account');
    }
  };

  return (
    <div className='split'>
      <div className='left-signup'>
        <img className="rounded-t-lg" src={logo} alt="Logo" />

        <h1 className='login-title'>Sign Up</h1>
        <p className='login-subtitle'>Let’s get you all set up so you can access your personal account.</p>

        <form className="max-w-sm mt-9" onSubmit={handleSubmit}>
          
          <div className='name'>
            <div className="mb-5 signup">
              <label htmlFor="firstName" className="input-label">First Name</label>
              <input
                type="text"
                id="firstName"
                className="custom-input"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-5 signup">
              <label htmlFor="lastName" className="input-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="custom-input"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className='name'>
            <div className="mb-5 signup">
              <label htmlFor="email" className="input-label">Email</label>
              <input
                type="email"
                id="email"
                className="custom-input"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5 signup">
              <label htmlFor="phoneNumber" className="input-label">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                className="custom-input"
                placeholder="Phone Number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5 signup">
            <label htmlFor="password" className="input-label">Password</label>
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

          <div className="mb-5 signup">
            <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
            <div className="password-wrapper">
              <input
                type="password"
                id="confirmPassword"
                className="custom-input"
                placeholder="Enter your password again"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input 
                id="remember" 
                type="checkbox" 
                value="" 
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                required 
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree to all the Terms and Privacy Policies
            </label>
          </div>

          <button type="submit" className="signup text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
            Create Account
          </button>
        </form>

        <p className='bottom'>Already have an account? <a href='/' style={{color: '#8DBC09'}}>Login</a></p> 
      </div>

      <div className='right-signup'>
        <img src={image} alt="Illustration" className="right-image" />
      </div>
    </div>
  );
};

export default Signup;
