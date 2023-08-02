import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
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
