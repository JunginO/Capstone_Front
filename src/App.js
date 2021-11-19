import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Playlist from "./pages/Playlist";
import { Register, Login } from "./pages/Auth";
import Write from "./pages/ListManage";
import Mylist from "./pages/Mylist";
import PublicRoute from "./layout/PublicRoute";
import PrivateRoute from "./layout/PrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Switch>
        <PublicRoute exact path="/auth/login" component={Login} />
        <PublicRoute exact path="/auth/register" component={Register} />
        <PrivateRoute exact path="/playlist" component={Playlist} />
        <PrivateRoute exact path="/write" component={Write} />
        <PrivateRoute exact path="/mylist" component={Mylist} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
