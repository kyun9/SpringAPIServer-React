import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      {/* 
      <a href="/">Home</a>
      <a href="/about">About</a> 
      */}

      <Link to="/">Home</Link>/
      <Link to="/about">About</Link>/
      <Link to="/connect">Test</Link>
    </div>
  );
}

export default Navigation;
