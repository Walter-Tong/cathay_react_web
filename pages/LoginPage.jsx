import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const fieldClassName =
    'w-full p-2 border-2 border-[#005D63] border-opacity-30'

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   fetch('/login/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.message === 'Login successful') {
  //       } else {
  //       }
  //     })
  //     .catch(error => {})
  //   setUsername('')
  //   setPassword('')
  // }

  return (
    <>
      <div className="mb-2 flex flex-row items-center justify-center">
        <div className="text-2xl">Login to</div>
        <img src="flybud.jpg" className="h-10" />
      </div>
      <form className="space-y-2">
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          className={fieldClassName}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          className={fieldClassName}
        />
        <Link
          to={'/' + username}
          // type="submit"
          className="flex w-full justify-center border-2 border-[#005D63] border-opacity-30 bg-[#005D63] bg-opacity-10 p-2 font-bold text-[#005D63]">
          Login
        </Link>
      </form>
    </>
  )
}

export default LoginPage
