import React, { Component } from "react";
import {  FormGroup, Label, Input } from 'reactstrap';

export default class writeMessage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <FormGroup>
        <Label for="exampleText">Coloca aquí tu mensaje</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
    );
  }
}
