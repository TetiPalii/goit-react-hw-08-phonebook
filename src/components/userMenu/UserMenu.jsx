import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>
        Welcome <span>{user.name}</span>
      </p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
