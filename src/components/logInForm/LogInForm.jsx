import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LogInForm = () => {
  const dispatch = useDispatch();

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
        <input type="email" name="email" />
      </label>
      <label htmlFor="">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
