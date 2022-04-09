import React from 'react'

const Registration = () => {
  return (
    <form>
      <label for="name">Name: </label>
      <input type="text" id='name'></input><br></br>
      <label for="name">Address: </label>
      <input type="text" id='name'></input><br></br>
      <label for="name">Password: </label>
      <input type="text" id='name'></input><br></br>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick="">
        Button
      </button>
    </form>
  )
}

export default Registration;