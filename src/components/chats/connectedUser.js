import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

export default class connectedUser extends Component {
  constructor() {
    super();
    this.state{(
      active:false
    )}
  }

  render() {
    return (
       <div>Usuario X está conectado</div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user,
    userLoading: state.loading.user,
  }
}
export default connect(mapStateToProps, { getUser })(NewMessage);

