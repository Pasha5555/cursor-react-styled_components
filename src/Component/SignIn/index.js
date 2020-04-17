import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Container, Ikon, Header, Input, Label, CheckBox, Text, Button, Link_signUp, Txt_forgot, Footer } from './styled.js';

export default class SignIn extends Component{
    state = {
        email: "",
        password: "",
        isEmail: false,
        isPassword: false,
        checked: false
    }
    passwordTrue = (event) =>{
        this.setState({
            password: event.target.value
        })
        
        if(event.target.value.length >=8 && event.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/)!=null){
            this.setState({
                isPassword: true
            }) 
        } else {
            this.setState({
                isPassword: false
            })
        }
    }

    emailTrue = (event) =>{
        this.setState({
            email: event.target.value
        })
        
        if(event.target.value.match(/^...+@..+\...+$/)!=null){
            this.setState({
                isEmail: true
            }) 
        } else {
            this.setState({
                isEmail: false
            })
        }
    }

    isChecked = () =>{
        this.setState({
            checked: !this.state.ckecked
        })
    }



    render() {
        return (
            <Container>
                <Ikon src="https://image.flaticon.com/icons/svg/565/565547.svg" alt="/"/>
                <Header>SIGN IN</Header>
                <br/>
                <Input placeholder='Input email here:' value={this.state.email} emptyInput={this.state.email ===''} border = {this.state.isEmail} onChange={this.emailTrue}/>
                <br/>
                <Input type='password' placeholder='Input password here:' value={this.state.password} emptyInput={this.state.password ===''} border = {this.state.isPassword} onChange={this.passwordTrue}/>
                <Label>
                    <CheckBox type='checkbox' onChange={this.isChecked}/>
                    <Text>Remember me</Text>
                </Label>
                <Button>SIGN IN</Button>
                <div>
                    <Txt_forgot>Forgot password ?</Txt_forgot>
                    <Link to='/sign-up'><Link_signUp>Don't have an account? Sign up</Link_signUp></Link>
                </div>
                <Footer>Copyrigth &copy; Your Website 2020.</Footer>
            </Container>
        );
    }
}
