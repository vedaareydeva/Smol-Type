import React from 'react'     //import react module
import { Link } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/users';

function Register() {
  const [user, setUser] = React.useState({    //user is a state variable, useState is a hook
    name: '',
    email: '',
    password: '',
  })

  const register = async () => {
    try {
      const response = await RegisterUser(user);
      if (response.success) {
        alert(response.message);
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

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
        <input type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        <button
          className="contained-btn"
          onClick={register}
        >
          Register</button>

        <Link
          to="/login"
          className="underline"
        >
          Already have an account? Login
        </Link>
      </div>

    </div>
  )
}

export default Register