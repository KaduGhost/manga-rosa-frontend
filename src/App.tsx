import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Register } from './pages'
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Switch>
              <Route exact path='/:slug/registrar' component={Register}></Route>
            </Switch>
          </div>
       </Router>
   );
  }
}
 
export default App;