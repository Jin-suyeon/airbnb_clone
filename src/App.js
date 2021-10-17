import "./App.css";

import { Route, Switch } from 'react-router';

import Home from './pages/Home';

function App() {


  
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
