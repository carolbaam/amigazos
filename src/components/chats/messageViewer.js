import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import NewMessage from './newMessage'




class MessageViewer extends React.Component{
  render(){
      const messages = this.props.messages.map(function (message, index) {
          return ( <Container>
                   <NewMessage
          
                    user={message.user}
                    message={message.message}
                    key={index} />
                     </Container>
                 );
        });
      return(
          <ul className="ChatList">
          {messages}
        </ul>
      )
  }


}

export default MessageViewer;