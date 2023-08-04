import { NavLinkAuth } from 'components/authNav/AuthNav.styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkAuth to="/">Home</NavLinkAuth>
      {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}
    </nav>
  );
};
