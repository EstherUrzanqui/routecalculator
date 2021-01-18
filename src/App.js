import React from 'react';
import './App.css';
import Map from './components/Map'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <Switch>
            <Route exact path='/' component={Map} />
          </Switch>
        </BrowserRouter>
      </div>  
    )
  }
}

export default App;
