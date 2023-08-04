import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Form, FormDiv } from './LoginForm.styled';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

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
    <FormDiv>
      <Form onSubmit={onLoginSubmit}>
        <label htmlFor="">
          Email
          <Input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <label htmlFor="">
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <Button size="sm" width="150px" type="submit">
          Login
        </Button>
      </Form>
    </FormDiv>
  );
};
