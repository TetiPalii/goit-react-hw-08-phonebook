import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const userName = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    dispatch(register({ userName, email, password }));
    // e.target.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        email
        <input type="email" name="email" />
      </label>
      <label>
        password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
