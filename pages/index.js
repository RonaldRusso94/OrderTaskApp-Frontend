import Layout from '../src/components/layout/Layout';
import { withAuth } from '../src/lib/withAuth';

const index = () => {
  return (
    <>
      <Layout>Landing Page! Working</Layout>
    </>
  );
};

export default withAuth(index);
