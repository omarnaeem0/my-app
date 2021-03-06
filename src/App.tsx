import * as React from 'react';
import './App.css';
import Title from './components/Title';

class App extends React.Component {
  public render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Title />
        </div>
    );
  }
}

export default App;
