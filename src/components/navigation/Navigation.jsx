import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Phone book</NavLink>}
    </nav>
  );
};
