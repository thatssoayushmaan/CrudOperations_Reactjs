import "./styles.css";
import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
// import Form from "./Components/Form";
import Posts from "./Components/Posts";
//import Users from "./Components/Users";
import Comments from "./Components/Comments";

export default function App() {
  return (
    <div className="App">
      <NavLink to="/Home">Home</NavLink>&emsp;
      <NavLink to="/about">About</NavLink>&emsp;
      <NavLink to="/posts">Posts</NavLink>&emsp;
      {/* <NavLink to="/users">Users</NavLink> */}
      {/* <NavLink to="/comments">Comments</NavLink> */}
      {/* <NavLink to="/form">Form</NavLink> */}
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/form" component={Form} /> */}
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/users" component={Users} /> */}
        <Route exact path="/Comments" component={Comments} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}
