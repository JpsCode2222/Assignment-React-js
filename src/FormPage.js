import React, { useState } from 'react';
import axios from "axios";
const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace this with your API call
    axios.post('http://localhost:3000/users', {
      name: name,
      email: email
    })
    .then(function (response) {
      alert("Saved")
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-5 mt-5'>
          <h1 className='mb-3'>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input className='form-control mb-3'
            placeholder='Enter Name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input className='form-control mb-3'
            placeholder='Enter Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='btn btn-info' type="submit">Submit</button>
      </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
