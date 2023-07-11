import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import userContext from './context';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import createImage from './image/create1.jpg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Create() {
  let user = useContext(userContext);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const [block, setBlock] = useState('none');
  const [unblock, setUnblock] = useState('block');
  const [data, setData] = useState([]);

  let url = 'http://localhost:1337/api/banks';
  useEffect(() => {
    async function fetchdata() {
      let res = await axios(url);
      let result = res.data;
      setData(result);
    }
    fetchdata();
  }, [url]);

  const postproducts = async (event) => {
    event.preventDefault();
    user.users = [
      ...user.users,
      { name, email, password, balance: 0 },
    ];
    alert(`Sucessfully created your Account ${name}`);
    setName('');
    setEmail('');
    setPassword('');
    setBlock('block');
    setUnblock('none');

    const post = {
      data: {
        name: name,
        email: email,
        password: password,
      },
    };

    const res = await axios.post(url, post);
    console.log(res.data);
  };

  return (
    <div>
      <h5 id="create-h4">Create Account</h5>
      <div className="create">
        <Form onSubmit={postproducts}>
          <Form.Group>
            <Form.Label id="input-1">User name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label id="input-1">Email:</Form.Label>
            <Form.Control
              type="text"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label id="input-1">Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              pattern=".{8,}"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="create-btn"
            disabled={!name && !email && !password}
          >
            <b>Create</b>
          </Button>
        </Form>
      </div>
  
      <div id="account">
        <br></br>
        
        <button
          type="submit"
          className="btn btn-primary"
          style={{ display: `${block}` }}
          onClick={() => {
            setUnblock('block');
            setBlock('none');
          }}
        >
          <div className='add'>
          <b>Add Another Account</b></div>
        </button>
        
       
      </div>
    </div>
  );
}

