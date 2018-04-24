import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form className="form-perfil">
        <FormGroup>
          <Label className="font-family font-color" for="exampleEmail">Tu nombre:</Label>
          <Input className="input-name" type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label className="font-family font-color" for="examplePassword">Tu frase favorita:</Label>
          <Input className="input" size="10" type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label className="font-family font-color" for="exampleFile">Sube tu foto de perfil:</Label>
          <Input className="input" type="file" name="file" id="exampleFile" />
        </FormGroup>
        <br/>
        <Button className="block" color="primary" size="lg" block>Enviar</Button>{' '}
      </Form>
    );
  }
}
