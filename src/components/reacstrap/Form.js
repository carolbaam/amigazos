import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormUser extends React.Component {
  constructor(){
    super();
    this.onListNameChange = this.onListNameChange.bind(this);
    this.onListEmailChange = this.onListEmailChange.bind(this);
    this.onListPhoneChange = this.onListPhoneChange.bind(this);
    this.pushMessage = this.pushMessage.bind(this);
    this.state = {
      name: "",
      email:"",
      phone: ""
    }
  }

    //Cada vez que el input cambie, el valor se va a almacenar en el estado.
    onListNameChange(event) {
      console.log(event.target.value)
      //Sacamos una copia del estado.
      const nameStateCopy = event.target.value;
      //Enviamos de vuelta el estado
      this.setState({ name: nameStateCopy });
    }


        //Cada vez que el input cambie, el valor se va a almacenar en el estado.
        onListEmailChange(event) {
          console.log(event.target.value)
          //Sacamos una copia del estado.
          const emailStateCopy = event.target.value;
          //Enviamos de vuelta el estado
          this.setState({ email: emailStateCopy });
        }

            //Cada vez que el input cambie, el valor se va a almacenar en el estado.
    onListPhoneChange(event) {
      console.log(event.target.value)
      //Sacamos una copia del estado.
      const phoneStateCopy = event.target.value;
      //Enviamos de vuelta el estado
      this.setState({ phone: phoneStateCopy });
    }

   

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Nombre</Label>
          <Input type="email" name="email" id="exampleEmail"   onChange={this.onListNameChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Email</Label>
          <Input name="text" id="examplePassword" placeholder="password placeholder" onChange={this.onListEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Teléfono</Label>
          <Input name="text" id="examplePassword" placeholder="password placeholder" onChange={this.onListPhoneChange} />
        </FormGroup>
        <br/>
        <Button onClick={this.pushMessge}>Submit</Button>
      </Form>
    );
  }
}