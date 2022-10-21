import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}

      <div className="app-body">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
