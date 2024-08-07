import React, { useState } from 'react';
import logo from '../img/logo.png';
import image from '../img/image.png';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    try {
      const response = await fetch('https://intern-evaluate.talentfort.live/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
          first_name: firstName, 
          last_name: lastName, 
          email, 
          phone_number: phoneNumber, 
          password, 
          confirm_password: confirmPassword 
        }),
      });
  
      let Message = 'An unexpected error occurred.';
  
      // Check if response is JSON
      try {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (response.ok) {
            alert(`Successfully signed up! Welcome ${data.user.first_name}`);
            setError('');
          } else {
            if (data.message && data.message.includes('Email already in use')) {
              setError('Email is already in use. Please try another email or log in.');
            } else {
              setError(`Sign-up failed: ${data.message || 'Please try again.'}`);
            }
            console.error('Error response:', data);
          }
        } else {
          // Handle non-JSON responses
          Message = await response.text();
        //   console.error('Unexpected response:', Message);
          alert(Message);
          setError('An error occurred. Please try again.');
        }
      } catch (error) {
        // Handle JSON parsing errors
        console.error('Error parsing response:', error);
        setError('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };
  

  return (
    <div className='split'>
      <div className='left-signup'>
        <img className="rounded-t-lg" src={logo} alt="Logo" />

        <h1 className='login-title'>Sign Up</h1>
        <p className='login-subtitle'>Let’s get you all set up so you can access your personal account.</p>

        <form className="max-w-sm mt-9" onSubmit={handleSubmit}>
          {error && <p className='error-message'>{error}</p>}
          
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

        <p className='bottom'>Already have an account? <a href='/'>Login</a></p> 
      </div>

      <div className='right-signup'>
        <img src={image} alt="Illustration" className="right-image" />
      </div>
    </div>
  );
};

export default Signup;
