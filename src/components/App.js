import React from 'react';
import Header from './Header';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
    //timers, listeners, ajax
    console.log('did Mount');
    debugger;
  }
  componentWillUnmount() {
      //clean timers, listeners, ajax
     console.log('will unmount');
     debugger; 
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader}/>
          <div>
          </div>
      </div>
    );
  }
}


export default App;