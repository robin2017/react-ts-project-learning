import React from 'react';
import Route from './router';
import Nav from './nav'
import './app.scss'
export default () => {
  return (
    <div className="app-container">
      <div className="nav-container">
        <Nav />
      </div>
      <div className="content-container">
        <Route />
      </div>
    </div>
  )
}


