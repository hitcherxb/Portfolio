import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/Home';
import AboutPage from './Components/AboutMe/AboutMe';
import ProjectPage from './Components/Projects/Projects'
import ContactPage from './Components/Contact/Contact'

function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/AboutMe' component={AboutPage} />
        {/* <Route exact path='/Projects' component={ProjectPage} /> */}
        <Route exact path='/Contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
