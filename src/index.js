import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

import PricingPage from './otherpages/Pricing';
import RequestPage from './otherpages/Send_request';

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/pricing" element={<PricingPage/>} />
        <Route path="/send-request" element={<RequestPage/>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
