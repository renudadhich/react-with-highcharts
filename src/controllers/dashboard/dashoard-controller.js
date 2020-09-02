import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DashboardContextProvider } from './dashboard-context';
import { updateChartData } from '../../actions/charts';
export const DashboardController = (props) => {
  const { children, chartData, updateChartData } = props;

  return (
    <DashboardContextProvider
      value={{
        chartData,
        updateChartData,
      }}
    >
      {children}
    </DashboardContextProvider>
  );
};

DashboardController.propTypes = {
  children: PropTypes.element,
  chartData: PropTypes.array,
  updateChartData: PropTypes.func,
};

const mapStateToProps = ({ charts }) => {
  return { ...charts };
};

const mapDispatchToProps = { updateChartData };

export const ConnectedDashoardController = connect(mapStateToProps, mapDispatchToProps)(DashboardController);
