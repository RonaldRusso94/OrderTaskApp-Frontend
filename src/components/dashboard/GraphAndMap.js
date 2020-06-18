import Card from '../common/Card';

const GraphAndMap = () => (
  <div className="flex flex-wrap md:flex-no-wrap justify-center space-y-3 md:space-y-0 md:justify-between space-x-0 md:space-x-4">
    <Card className="w-full md:w-3/5 pt-3">
      <>
        <span>Traffic Summary</span>
        <img
          className="mt-3 pb-2"
          src="https://www.socialmediaexaminer.com/wp-content/uploads/2019/04/google-data-studio-facebook-ads-performance-over-time-example-600@2x.png"
          alt="map"
          style={{ maxHeight: '300px' }}
        />
      </>
    </Card>
    <Card className="w-full md:w-2/5 pt-3">
      <>
        <span>Top countries</span>
        <img
          className="mt-3 pb-2"
          src="https://23i69d6p0gw1zwz4y3smspc1-wpengine.netdna-ssl.com/wp-content/uploads/sites/25/cnt-import/sew/IMG/669/260669/google-analytics-location-report-map.jpg"
          alt="map"
          style={{ maxHeight: '300px' }}
        />
      </>
    </Card>
  </div>
);

export default GraphAndMap;
