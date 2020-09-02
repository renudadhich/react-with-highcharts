import React, { useEffect } from 'react';
import { withDashboardContext } from '../../controllers/dashboard/dashboard-context';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsStock from 'highcharts/highstock';
import './stylesheets/index.scss';
import { chartConfigs } from './chart-config';
const Charts = (props) => {
  const { chartData, updateChartData } = props;
  const { splineChart, stockChart } = chartConfigs;
  let updatedLineChartOptions = { ...splineChart, series: [{ data: chartData }] };
  let updatedSparkChartOptions = { ...stockChart, series: [{ data: chartData }] };
  useEffect(() => {
    setInterval(() => {
      updateChartData();
    }, 2000);
  }, []);

  return (
    <div className="charts-content">
      <div className="charts">
       <HighchartsReact highcharts={Highcharts} options={updatedLineChartOptions} />{' '}
      </div>
      <div className="charts">
       <HighchartsReact
          highcharts={HighchartsStock}
          constructorType={'stockChart'}
          options={updatedSparkChartOptions}
        />
      </div>
    </div>
  );
};
export default withDashboardContext(Charts);
