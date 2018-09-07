import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Login from './Login';
import Register from './Register';
import Success from './Success'
import NavBar from './NavBar'
import Error from './Error'

class Loginscreen extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonLabel:'',
            page:'',
            screen:[],
            message:""
        }
    }
  componentWillMount(){
    let screen=[];
    screen.push(<Login completeLogin={this.completeLogin} handleError={this.handleError}/>);
    let message = "Not registered yet? Register Now";
    this.setState({
                    page:'Login',
                    screen:screen,
                    message:message,
                    buttonLabel:'Register'
                })
  }

  finishedRegistration = () => {
      this.switchPage()
  }

  completeLogin = () => {
    let screen=[];
    screen.push(<Success/>);
    this.setState({
        screen:screen,
        message:'',
        buttonLabel:'Logout',
        page:'Success'
    })
  }

  handleError = (error) => {
    let screen=[];
    screen.push(<Error error={error}/>);
    this.setState({
        screen:screen,
        buttonLabel:"Go Back",
        page:'Error',
        message:"Oh no! Something went wrong please try again!"
    })
  }

  switchPage = () => {
      if(this.state.page ==='Login'){
        let screen=[];
        screen.push(<Register finishedRegistration={this.finishedRegistration} handleError={this.handleError}/>);
        this.setState({
            page: 'Register',
            buttonLabel: 'Login',
            screen:screen,
            message:'Click here to Login'
        })
      }
      else{
        let screen=[];
        screen.push(<Login completeLogin={this.completeLogin}/>);
        let message = "Not registered yet? Register Now";
        this.setState({
                    page:'Login',
                    screen:screen,
                    message:message,
                    buttonLabel:'Register'
                })
      }
  }

  render() {
    return (
      <div>
        <NavBar page={this.state.page}/>
        {this.state.screen}
        <br/>
        {this.state.message}
        <br/>
        <Button variant="contained" color="primary" style={style} onClick={this.switchPage}>
                {this.state.buttonLabel}
        </Button>
      </div>
    );
  }
}
const style = {
    margin: 25,
   };
export default Loginscreen;