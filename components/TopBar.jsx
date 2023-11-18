import { NavLink } from 'react-router-dom'

function TopBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default TopBar