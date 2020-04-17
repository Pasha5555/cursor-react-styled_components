import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Container, Ikon, InputName, Header, Input, CheckBox_position, CheckBox, Text, Button, Link_signUp, Footer } from './styled.js';

let arrUsers = [];
export default class SignUp extends Component{
    state = {
        firstName: '',
        lastName: '',
        isFirstName: false,
        isLastName: false,
        password: '',
        isPassword: false,
        email: '',
        isEmail: false,
        checked: false
    }
    
    firstNameTrue = (event) =>{
        this.setState({
            firstName: event.target.value
        })
        
        if(event.target.value.length >=3){
            this.setState({
                isFirstName: true
            }) 
        } else {
            this.setState({
                isFirstName: false
            })
        }
    }

    lastNameTrue = (event) =>{
        this.setState({
            lastName: event.target.value
        })
        
        if(event.target.value.length >=3){
            this.setState({
                isLastName: true
            }) 
        } else {
            this.setState({
                isLastName: false
            })
        }
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

    saveData = () =>{
        if(this.state.checked){
            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            arrUsers.push(user);
            localStorage.setItem('data', [arrUsers]);
            console.log(arrUsers);
        }
    }
    render() {
        return (
            <Container>
                <Ikon src="https://image.flaticon.com/icons/svg/565/565547.svg"/>
                <Header>SIGN UP</Header>
                <br/>
                <div>
                    <InputName placeholder='First Name*' value={this.state.firstName} emptyInput={this.state.firstName===''} border = {this.state.isFirstName} onChange={this.firstNameTrue}/>
                    <InputName placeholder='Last Name*' value={this.state.lastName} emptyInput={this.state.lastName===''} border = {this.state.isLastName} onChange={this.lastNameTrue}/>
                </div>
                <Input placeholder='Input email here:' value={this.state.email} emptyInput={this.state.email ===''} border = {this.state.isEmail} onChange={this.emailTrue}/>
                <br/>
                <Input type='password' placeholder='Input password here:' value={this.state.password} emptyInput={this.state.password ===''} border = {this.state.isPassword} onChange={this.passwordTrue}/>
                <CheckBox_position>
                    <CheckBox type='checkbox' onChange={this.isChecked}/>
                    <Text>
                        I want to receive inspiration, marketing <br/>
                        promotions and updates via email.
                    </Text>
                </CheckBox_position>
                <Button onClick={this.saveData}>SIGN UP</Button>
                <div>
                    <Link to='/sing-up'><Link_signUp>Already have an account? Sign in</Link_signUp></Link>
                </div>
                <Footer>Copyrigth &copy; Your Website 2020.</Footer>
            </Container>
        )
    }
}