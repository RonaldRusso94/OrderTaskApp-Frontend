import Layout from '../src/components/layout/Layout';
import { withAuth } from '../src/lib/withAuth';

const index = () => {
  return (
    <>
      <Layout>
        Landing Page!
      </Layout>
    </>
  );
};

export default withAuth(index);
