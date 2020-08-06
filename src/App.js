import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './containers/counter';
import Things from './containers/things'


class App extends Component {

  render(){
    return (
      <main id="app">
        <Switch>
            <Route exact path ="/" render={() => <h1 id="welcome">Welcome</h1>}/>

            <Route path ="/counter" component={Counter} />

            <Route path ="/things" component={Things} />
        </Switch>
      </main>
    );
  }
}


export default App;