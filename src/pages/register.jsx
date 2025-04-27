import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset error and success
    setError('');
    setSuccess(false);
    
    // Validate email
    if (!email) {
      setError('Email must not be blank');
      return;
    }
    
    // Validate password
    if (!password) {
      setError('Password must not be blank');
      return;
    }
    
    if (password.length < 10) {
      setError('Password must be at least 10 characters long');
      return;
    }
    
    // If all validations pass, show success message
    setSuccess(true);
  };

  return (
    <div>
      <h1>Registration</h1>
      
      {error && <div role="alert" className="error">{error}</div>}
      {success && <div className="success">Registration successful!</div>}
      
      {!success && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}