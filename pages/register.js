import Register from '../src/components/Register';
import { withGuest } from '../src/lib/withAuth';
const register = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export default withGuest(register);
