import Login from '../src/components/auth/Login';
import { withGuest } from '../src/lib/withAuth';

const login = () => (
  <>
    <Login />
  </>
);

export default withGuest(login);
