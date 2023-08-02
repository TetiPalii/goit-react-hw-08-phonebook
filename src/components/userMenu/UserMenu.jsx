import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/useAuth';
// import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  const user = useSelector(state => state.auth.user);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
