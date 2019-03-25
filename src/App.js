import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import ListTortillas from './pages/ListTortillas';
import NewTortilla from './pages/NewTortilla';
import EditTortilla from './pages/EditTortilla';
import DetailTortilla from './pages/DetailTortilla';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>

        <nav>
          <ul style={{ display: "flex", justifyContent: "flex-start", listStyle: "none" }}>
            <li ><Link style={{ padding: "10px", textDecoration: "none", color: "dodgerblue" }} to={`/`}>Home</Link></li>
            <li ><Link style={{ padding: "10px", textDecoration: "none", color: "dodgerblue" }} to={`/tortillas`}>List all</Link></li>
            <li ><Link style={{ padding: "10px", textDecoration: "none", color: "dodgerblue" }} to={`/tortillas/new`}>Add new one</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tortillas" component={ListTortillas} />
          <Route path="/tortillas/new" component={NewTortilla} />
          <Route path="/tortillas/:id/edit" component={EditTortilla} />
          <Route path="/tortillas/:id" component={DetailTortilla} />
        </Switch>


      </Router>
    );
  }
}

export default App;
