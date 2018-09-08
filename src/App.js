import React, { Component } from 'react';
import './App.css';
import LoginContainer from './components/LoginContainer'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import yellow from '@material-ui/core/colors/yellow'
import { createMuiTheme } from '@material-ui/core';
class App extends Component {

  theme = createMuiTheme({
    palette:{
        primary: {
           main: '#212121'
        },
        secondary: yellow
    }
})

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={this.theme}>
          <NavBar/>
          <LoginContainer/>
          <Footer/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
