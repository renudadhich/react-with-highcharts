import React from 'react';
import { withDashboardContext } from '../../controllers/dashboard/dashboard-context';
import Header from '../header';
import Sidebar from '../sidebar';
import ContentArea from '../content-area';
import './stylesheets/index.scss';
const LandingBoard = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ContentArea />
      </div>
    </div>
  );
};
export default LandingBoard;
