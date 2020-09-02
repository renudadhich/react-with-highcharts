import * as types from '../actions/charts/types';

export const appIntialState = {
  chartData: [],
};

export default (state = appIntialState, action = {}) => {
  switch (action.type) {
    case types.CHART_UPDATE:
      return {
        ...state,
        chartData: action.payload,
      };
    default:
      return state;
  }
};
