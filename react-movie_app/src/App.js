import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Connect from "./routes/ConnectTest";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/connect" component={Connect} />
    </BrowserRouter>
  );
}
export default App;
