import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Tu nombre</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Tu frase favorita</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Sube tu foto de perfil</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <br/>
        <Button>Submit</Button>
      </Form>
    );
  }
}