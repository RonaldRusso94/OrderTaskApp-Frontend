import React from 'react';
import Layout from '../src/components/layout/Layout';
import Container from '../src/components/common/Container';
import AnalyticsCards from '../src/components/dashboard/AnalyticsCard';
import GraphAndMap from '../src/components/dashboard/GraphAndMap';
import { withAuth } from '../src/lib/withAuth';
import NewStrategy from '../src/components/dashboard/NewStrategy';

const dashboard = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <NewStrategy open={open} setOpen={setOpen} />
      <Layout>
        <Container normalMargins>
          <div>
            <div className="flex justify-between">
              <div>
                <span className="uppercase text-xs text-gray-600">Overview</span>
                <h2 className="text-lg mt-1 mb-5">Dashboard</h2>
              </div>
              <button
                onClick={() => setOpen(true)}
                type="button"
                className="button bg-main-blue-500 hover:bg-main-blue-400 text-white h-12 self-center"
              >
                Create new order
              </button>
            </div>
            <AnalyticsCards />
            <GraphAndMap />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default withAuth(dashboard);
