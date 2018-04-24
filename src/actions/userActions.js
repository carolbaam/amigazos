import {auth, googleProvider} from '../firebaseconfig'
import {GET_USER, USER_STATUS, POST_ID, POST_ROOM}  from './actionTypes'
import axios from 'axios';


export function getUser(){
    return dispatch => {
        //Show loading status to true
        dispatch({
           type: USER_STATUS, 
           payload: true 
        })



        auth.onAuthStateChanged(user =>  {
            dispatch({
                type: GET_USER, 
                payload: user
            });
            dispatch({
                type: USER_STATUS,
                payload: false
            })
        });
    }
}


export function postId(id){
    return dispatch => {
        dispatch({
            type: POST_ID,
            payload: id
        })
    }
}



export function postRoom(room){
    return dispatch => {
        dispatch({
            type: POST_ROOM,
            payload: room
        })
    }
}


export function googleLogin(){
    return dispatch => {auth.signInWithPopup(googleProvider).then( () => { 
        window.location.replace('/registration')
    })
}}


export function logout(){
    return dispatch => {auth.signOut();
    
}
}
