import React from 'react'     //import react module

function Register() {
  const [user, setUser] = React.useState({    //user is a state variable, useState is a hook
    name: '',
    email: '',
    password: '',
  })
  return (
    <div className='h-screen bg-primary flex items-center justify-center'>

      <div className='bg-white shadow-md p-5 flex flex-col gap-5 w-96'>
        <h1 className='text-2xl font-semibold text-orange-800 '>SmolType REGISTER</h1>
        <hr />
        <input type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Enter your name"
        />
        <input type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />
        <input type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        <button
          className="contained-btn">
          Register</button>
      </div>

    </div>
  )
}

export default Register