import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BACKEND_URL from '../globals';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault(); 
  
    const formBody = new URLSearchParams();
    formBody.append("username", formData.username);
    formBody.append("password", formData.password);
  
    fetch(BACKEND_URL + "/user/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Must use this content type
      },
      body: formBody.toString() // Convert to URL-encoded string
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse the response JSON
      } else {
        throw new Error('Login failed');
      }
    })
    .then(data => {
      console.log(data); // Handle the login response
      navigate("/main"); // Redirect to the main page
    })
    .catch(error => {
      console.error(error.message);
    });
  };
  
  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={onLogin} style={styles.form}>
        <input
          type="text"
          onChange={handleEventChange}
          value={formData.username}
          name='username'
          style={styles.input} // Fixed: "style" instead of "styles"
          placeholder='username'
        />
        <input
          type="password"
          onChange={handleEventChange}
          name='password'
          style={styles.input}
          value={formData.password}
          placeholder='password'
        />
        <button type="submit" style={styles.button}>Login</button> {/* Moved inside form */}
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};

export default Login;
