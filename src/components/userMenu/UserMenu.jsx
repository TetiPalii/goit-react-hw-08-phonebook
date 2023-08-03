import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/useAuth';
// import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user.name);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome,{user.name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
