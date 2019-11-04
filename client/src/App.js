import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import NoMatch from "./pages/NoMatch";
import NavigationBar from "./components/NavBar";
import SignUp from "./pages/SignUp"
import Gallery from "./pages/Gallery"


function App() {
  return (
    <Router>
      <div>
      <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path ="/SignUp" component = {SignUp}/>
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path ="/Matches" component = {Gallery} />
          {/* <Route exact path ="/Contact" component = {Contact} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
