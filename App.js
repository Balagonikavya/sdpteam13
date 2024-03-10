// App.js
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import YourComponent from './components/YourComponent';


const App = () => {
  return (
    <Router>
        {/* <Navbar /> */}
        <YourComponent/>
    </Router>
  );
};

export default App;
