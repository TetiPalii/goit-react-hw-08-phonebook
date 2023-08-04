import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import Input from '@mui/joy/Input';
import { Form } from 'components/logInForm/LoginForm.styled';
import { Button } from '@mui/joy';

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
    <Form onSubmit={onSubmit}>
      <label>
        Name
        <Input type="text" name="name" />
      </label>
      <label>
        email
        <Input type="email" name="email" />
      </label>
      <label>
        password
        <Input type="password" name="password" />
      </label>
      <Button size="sm" type="submit">
        Register
      </Button>
    </Form>
  );
};
