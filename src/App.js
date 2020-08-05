import React from 'react';
import { connect } from 'react-redux'
import NameCard from './components/nameCard';

class App extends React.Component {
    render() {
      return (
          <main>
              <h1>Hello World!</h1>
              <p>Nice to meet you React</p>
              <NameCard/>
          </main>
      )
    }
  }
export default connect (null) (App)