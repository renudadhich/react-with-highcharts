import React, { createContext } from 'react';
import { ConnectedDashoardController } from './dashoard-controller';
import { appIntialState } from '../../reducer/charts';
// Create the context
export const dashboardContextDefaultValue = {
  ...appIntialState,
};

const DashboardContext = createContext(dashboardContextDefaultValue);

// Export Provider and Consumer
export const DashboardContextProvider = DashboardContext.Provider;
export const DashboardContextConsumer = DashboardContext.Consumer;

export const withDashboardContext = (Component) => (props) => (
  <ConnectedDashoardController>
    <DashboardContextConsumer>{(ctx) => <Component {...props} {...ctx} />}</DashboardContextConsumer>
  </ConnectedDashoardController>
);
