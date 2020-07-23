import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import Home from './home';
import NewBook from './newBook';
import BookDetails from './bookDetails';

function App(props) {
  const { title } = props;
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />{' '}
          <h1 className="App-title">{title}</h1>
        </header>
        <section className="Layout">
          <nav>
            <NavLink
              exact
              to="/"
              activeStyle={{ fontWeight: 'bold' }}
            >
              Home
            </NavLink>
            <NavLink
              to="/new"
              activeStyle={{ fontWeight: 'bold' }}
            >
              New Book
            </NavLink>
          </nav>
          <section>
            <Switch>
              <Route exact path="/" component={Home} />{' '}
              <Route
                exact
                path="/new"
                component={NewBook}
              />
              <Route
                exact
                path="/book/:title"
                component={BookDetails}
              />
            </Switch>
          </section>
        </section>
      </div>
    </Router>
  );
}

const mapState = (state) => state.app;
const mapDispatch = () => ({});
export default connect(mapState, mapDispatch)(App);

App.propTypes = {
  title: PropTypes.string.isRequired,
};
