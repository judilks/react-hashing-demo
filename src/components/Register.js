import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleClick = async (event) => {
        var apiBaseUrl = "http://localhost:3001/";
        console.log("values",this.state.name,this.state.email,this.state.password);
        //To be done:check for empty values before hitting submit
        var payload={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }
        try{
            const result = await axios.post(apiBaseUrl+'register', payload)
            console.log(result)
            if(result.data.status === "Success") {
                this.props.finishedRegistration()
            }
            else{
                this.props.handleError(result)
            }
        }
        catch(e){
            this.props.handleError(e.response.data)
        }
        
    }

  render() {
    return (
      <div>
          <TextField
                id="name"
                label="Name"
                style={style}
                value={this.state.name}
                onChange={(event) => this.setState({name:event.target.value})}
                margin="normal"
            />
            <br/>
          <TextField
                id="email"
                label="Email"
                style={style}
                value={this.state.email}
                onChange={(event) => this.setState({email:event.target.value})}
                margin="normal"
            />
            <br/>
            <TextField
                id="password"
                label="Password"
                type="password"
                style={style}
                value={this.state.password}
                onChange={(event) => this.setState({password:event.target.value})}
                margin="normal"
            />
            <br/>
            <Button variant="contained" color="primary" style={style} onClick={(event) => this.handleClick(event)}>
                Submit
            </Button>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;