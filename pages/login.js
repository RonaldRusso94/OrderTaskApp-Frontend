import Login from '../src/components/Login';
import { withGuest } from '../src/lib/withAuth';
const login = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default withGuest(login);
