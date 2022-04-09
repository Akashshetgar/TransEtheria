import React from 'react'
import {Link } from "react-router-dom"

const Login = () => {
  return (
    <form>
      <label for="name">Name: </label>
      <input type="text" id='name'></input><br></br>
      <label for="name">Address: </label>
      <input type="text" id='name'></input><br></br>
      <label for="name">Password: </label>
      <input type="text" id='name'></input><br></br>
      <Link to="/home">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </Link>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en';
      }}>
        Metamask Installation
      </button>
    </form>
  )
}

export default Login;