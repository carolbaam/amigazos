import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Nombre</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Número de tarjeta</Label>
          <Input type="password" name="password" id="examplePassword"  />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">CVV</Label>
          <Input type="password" name="password" id="examplePassword"  />
          <Label for="examplePassword">Fecha de expiración</Label>
          <Input type="password" name="password" id="examplePassword"  />
        </FormGroup>
        <br/>
        <Button>Submit</Button>
      </Form>
    );
  }
}