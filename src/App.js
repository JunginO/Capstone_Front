import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Playlist from "./pages/Playlist";
import { Register, Login } from "./pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Switch>
        <Route exact path="/playlist" component={Playlist} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
