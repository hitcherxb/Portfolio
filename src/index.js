import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/Home';
import AboutPage from './Components/AboutMe/AboutMe';
import ProjectPage from './Components/Projects/Projects'
import ContactPage from './Components/Contact/Contact'

ReactDOM.render(
  <Router>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/AboutMe' component={AboutPage} />
    <Route exact path='/Projects' component={ProjectPage} />
    <Route exact path='/Contact' component={ContactPage} />
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
