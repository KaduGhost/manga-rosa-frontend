import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Register, Registers, Validar } from './pages'
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Switch>
              <Route exact path='/:slug/registrar' component={Register}></Route>
              <Route exact path='/:slug/validar' component={Validar}></Route>
              <Route exact path='/registros' component={Registers}></Route>
            </Switch>
          </div>
       </Router>
   );
  }
}
 
export default App;