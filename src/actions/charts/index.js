import * as type from './types';

export const dispatchAction = (data) => ({ type: type.CHART_UPDATE, payload: data });
export const updateChartData = () => {
  return (dispatch) => {
    let chartData = new Array(6);
    for (let index = 0; index < chartData.length; index++) {
      chartData[index] = Math.ceil(Math.random() * 6);
    }

    console.log('chart data updating', chartData);
    dispatch(dispatchAction(chartData));
  };
};
