import { useSelector } from 'react-redux';
import { useAuth } from 'redux/auth/useAuth';
import { selectError, selectIsLoading, selectItems } from 'redux/selectors';

export default function Home() {
  // const { isLoggedIn } = useAuth;
  // const items = useSelector(selectItems);

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  return <div>Your best phone book ever</div>;
}
