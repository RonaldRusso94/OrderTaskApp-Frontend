import Layout from '../src/components/Layout';
import { withAuth } from '../src/lib/withAuth';

const index = (props) => {
  console.log('props', props)
  return (
    <>
      <Layout />
    </>
  );
};

export default withAuth(index);
