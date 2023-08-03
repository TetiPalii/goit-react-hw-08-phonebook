import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const onLoginSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  return (
    <form onSubmit={onLoginSubmit}>
      <label htmlFor="">
        Email
        <input type="email" name="email" value={email} onChange={onChange} />
      </label>
      <label htmlFor="">
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
