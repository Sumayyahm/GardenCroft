import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Container, Image } from 'semantic-ui-react';
import axios from 'axios';
import greencroft from "../../images/gclogo.png";
import './index.css'



export default class Contact extends Component {
  
  state = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phoneNumber: '',
    sent: false
  }

  // handle inputs
  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleMessage= (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      message: this.state.message
    }
    axios.post("/api/form", data)
    .then(res => {
      this.setState({
        sent: true,
      }, this.resetForm())
      alert("Message successfully sent!");
    }).catch(() => {
      console.log("Error!");
    });
  }

  resetForm =() => {
    this.setState({
      firstName: '',
      lastName: '',
      message: '',
      email: '',
      phoneNumber: ''
    })
    setTimeout(() => {
      this.setState({
        sent: false
      })
    }, 4000)
  } 

render() {
return (
  <div>
    <br></br>
    <Image src={greencroft} style={{display: 'block', marginLeft:'auto', marginRight:'auto'}} />
    <br></br>
  <Container className='container'>
  <Form onSubmit={this.formSubmit}>
    <Form.Group widths='equal'>
      <Form.Field
        className= 'text-area'
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        value={this.state.firstName}
        onChange={this.handleFirstName}
      />
      <Form.Field
        className= 'text-area'
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        value={this.state.lastName}
        onChange={this.handleLastName}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Message'
      placeholder='Message'
      value={this.state.message}
      onChange={this.handleMessage}
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='example@myexample.com'
      value={this.state.email}
      onChange={this.handleEmail}
    />
     <Form.Field
      className= 'text-area'
      control={Input}
      label='Phone Number'
      placeholder='+1 XXX XXX XXXX'
      value={this.state.phoneNumber}
      onChange={this.handlePhoneNumber}
      />
      <div>
    <Button
      id='form-button-control-public'
      content='Submit'
      color='green'
    />
    </div>
  </Form>
  <br/><br/><br/>
  </Container>
  </div>
)
}

}