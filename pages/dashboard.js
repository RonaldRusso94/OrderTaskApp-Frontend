import Layout from '../src/components/layout/Layout';
import Container from '../src/components/common/Container';
import AnalyticsCards from '../src/components/dashboard/AnalyticsCard';
import GraphAndMap from '../src/components/dashboard/GraphAndMap';

const dashboard = () => (
  <Layout>
    <Container normalMargins>
      <div>
        <span className="uppercase text-xs text-gray-600">Overview</span>
        <h2 className="text-lg mt-1 mb-5">Dashboard</h2>
        <AnalyticsCards />
        <GraphAndMap />
      </div>
    </Container>
  </Layout>
);

export default dashboard;
