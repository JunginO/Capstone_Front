import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Playlist from "./pages/Playlist";
import { Register, Login } from "./pages/Auth";
import Write from "./pages/ListWrite";
import Mylist from "./pages/Mylist";
import ListManage from "./pages/ListManage";
import PublicRoute from "./layout/PublicRoute";
import PrivateRoute from "./layout/PrivateRoute";
import Feed from "./pages/Feed";
import Setting from "./pages/Setting";
import Explore from "./pages/Explore";
import EditProfile from "./pages/Setting/components/EditProfile";
import Search from "./pages/Search";
import UserDetail from "./pages/UserDetail";
import Playbar from "./pages/Playbar";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Playbar />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/listmanage" component={ListManage} />
        <PublicRoute exact path="/auth/login" component={Login} />
        <PublicRoute exact path="/auth/register" component={Register} />
        <PrivateRoute exact path="/playlist" component={Playlist} />
        <PrivateRoute exact path="/write" component={Write} />
        <PrivateRoute exact path="/mylist" component={Mylist} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/userdetail" component={UserDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
