import Card from '../common/Card';

const AnalyticsCard = () => {
  const array = [1, 2, 3, 4];
  return (
    <div className="mb-6">
      <div className="flex justify-center md:justify-between flex-wrap space-x-0 space-y-4 md:space-x-1 md:space-y-0">
        {array.map((item) => (
          <Card key={item} className="w-full md:w-1/5 lg:w-64 pt-2" style={{ width: '24%' }}>
            <div>
              <div className="flex justify-between">
                <span className="uppercase text-xs">Sales</span>
                <span className="text-gray-500 text-xs lg:text-sm">
                  Last 7 days
                </span>
              </div>
              <span className="font-bold text-3xl">72%</span>
              <div className="flex justify-center">
                <img
                  className="w-2/3 h-7"
                  src="https://vega.github.io/vega/examples/img/stacked-bar-chart.png"
                  alt="graph"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsCard;
