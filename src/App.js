import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from 'LoginPage';

class App extends Component {
  render() {
    return (
      <div className="LoginPage">
        <MuiThemeProvider>
              <LoginPage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
