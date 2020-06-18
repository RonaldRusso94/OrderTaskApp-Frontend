import Register from '../../src/components/auth/Register';
import { withGuest } from '../../src/lib/withAuth';

const register = () => (
  <div>
    <Register />
  </div>
);

export default withGuest(register);
