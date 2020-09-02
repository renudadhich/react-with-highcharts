import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard';
import Charts from '../charts';
import './stylesheets/index.scss';
const ContentArea = () => {
  return (
    <div className="main-content-area">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/charts" component={Charts} />
      </Switch>
    </div>
  );
};
export default ContentArea;
