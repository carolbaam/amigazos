import React, { Component } from "react";
import {  FormGroup, Label, Input } from 'reactstrap';




class writeMessage extends React.Component{
  
  
      handleNewMessage=(event)=> {
          event.preventDefault();
          const user = this.refs.user.value;
          const message = this.refs.message.value;
         // console.log(author)
         console.log('codes')
         
        this.props.socket.socket.post('/chat/broadcast',{ roomName: 'myroom',user:user,message:message },
          function(data,status){
              console.log(data);
          })
          this.props.onNewMessage({user: user, message: message});
          this.refs.message.value = '';
          this.refs.user.value = '';
        }
      
      
      
      render(){
          return(
           
              <form className="ChatForm" onSubmit={this.handleNewMessage}>
               <Label for="exampleText">Coloca aquí tu nombre</Label>
          <input type="text" placeholder="user" className="author" ref="user"/>
          <Label for="exampleText">Coloca aquí tu mensaje</Label>
          <input type="text" placeholder="message..." className="text" ref="message" />
          <input type="submit" value="Send" />
            </form>
            
          )
      }
  }
  
  export default writeMessage