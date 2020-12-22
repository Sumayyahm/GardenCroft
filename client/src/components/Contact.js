import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react';
import axios from 'axios';




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
      console.log(data)
     console.log("inside post route")
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
    <br></br><br></br>
  <Container className='container'>
    <h1 style={{color:'white', fontSize:'37px', textAlign:'center', fontFamily:'Palatino, serif'}}>Get in touch with us!</h1>
    <h4 style={{color:'white', textAlign:'center', fontFamily:'Palatino, serif'}}>12567, Windy Park, Austin TX 79434</h4>
    
  <Form onSubmit={this.formSubmit}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        placeholder='First name'
        value={this.state.firstName}
        onChange={this.handleFirstName} />
      
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        placeholder='Last name'
        value={this.state.lastName}
        onChange={this.handleLastName} />
    </Form.Group>

      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        placeholder='Message'
        value={this.state.message}
        onChange={this.handleMessage}/>

      <Form.Field
        id='form-input-control-error-email'
        control={Input}
        placeholder='Email'
        value={this.state.email}
        onChange={this.handleEmail} />
        
     <Form.Field
      className= 'text-area'
      control={Input}
      placeholder='Phone Number'
      value={this.state.phoneNumber}
      onChange={this.handlePhoneNumber} />
        
      <div>
    <Button
      id='form-button-control-public'
      content='Submit'
      color='white'
    />
    </div>
  </Form>
  <br/><br/><br/>
  </Container>
  </div>
)
}

}