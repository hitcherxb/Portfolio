import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/Home';

function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
