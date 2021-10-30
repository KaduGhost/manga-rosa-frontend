import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Register, Registers, Validar } from './pages'
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Switch>
              <Route exact path='/:slug/registrar' component={Register}/>
              <Route exact path='/:slug/validar' component={Validar}/>
              <Route exact path='/registros' component={Registers}/>
            </Switch>
          </div>
       </Router>
   );
  }
}
 
export default App;