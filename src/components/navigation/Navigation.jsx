import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/logIn">Log in</NavLink>
    </nav>
  );
};
