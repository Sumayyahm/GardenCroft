import React, { Component } from 'react';
import { Form, Icon, TextArea, Button, Container } from 'semantic-ui-react';
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
        value={this.state.firstName}
        onChange={this.handleFirstName}>
          <label style={{color:'white', fontSize:'20px', fontFamily:'Palatino, serif'}}>First Name</label><br/>
          <input placeholder='First Name'></input>
        </Form.Field>
      
      <Form.Field
        id='form-input-control-last-name'
        value={this.state.lastName}
        onChange={this.handleLastName}>
        <label style={{color:'white', fontSize:'20px', fontFamily:'Palatino, serif'}}>Last Name</label><br/>
        <input placeholder='Last Name'></input>
      </Form.Field> 
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      placeholder='Message'
      value={this.state.message}
      onChange={this.handleMessage}/>
    <Form.Field
      id='form-input-control-error-email'
      value={this.state.email}
      onChange={this.handleEmail}>
        <label style={{color:'white', fontSize:'20px', fontFamily:'Palatino, serif'}}>Email</label><br/>
        <input placeholder='example@myexample.com'></input>
      </Form.Field>
     <Form.Field
      className= 'text-area'
      value={this.state.phoneNumber}
      onChange={this.handlePhoneNumber}>
        <label style={{color:'white', fontSize:'20px', fontFamily:'Palatino, serif'}}>Phone Number</label><br/>
        <input placeholder='+1 XXX XXX XXXX'></input>
      </Form.Field>
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