import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/useAuth';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);

  const onLoginSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <form onSubmit={onLoginSubmit}>
      <label htmlFor="">
        Email
        <input type="email" name="email" value={user.email} />
      </label>
      <label htmlFor="">
        Password
        <input type="password" name="password" value={user.password} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
