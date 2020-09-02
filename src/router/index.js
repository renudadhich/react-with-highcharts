import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingBoard from '../pages/landing-board';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={LandingBoard} />
    </BrowserRouter>
  );
};
