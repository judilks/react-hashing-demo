import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
class Login extends Component {
    constructor(props){ 
        super(props);
        this.state={
            email:'',
            password:''
        }
    }


    handleClick = async (event) => {
        var apiBaseUrl = "http://localhost:3001/";
        var payload={
            "email":this.state.email,
            "password":this.state.password
        }
        try{
            const result = await axios.post(apiBaseUrl+'login', payload)
            console.log(result)
            if(result.data.status === "Success"){
                this.props.completeLogin()
            }
            else{
                this.props.handleError(result);
            }
        }
        catch(e){
            this.props.handleError(e.response.data)
        }
    }


    render() {
        return (
        <div style={style}>
            <TextField
                id="email"
                label="Email"
                style={style}
                value={this.state.email}
                onChange={(event,newValue) => this.setState({email:event.target.value})}
                margin="normal"
            />
            <br/>
            <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
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
 margin: 20,
};
export default Login;