import React from "react";
import "./App.scss";

import './styles/style.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';


import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
