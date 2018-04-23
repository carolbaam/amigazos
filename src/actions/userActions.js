import {auth, googleProvider} from '../firebaseconfig'
import {GET_USER} from './actionTypes'

export function getUser(){
    return dispatch => {
        auth.onAuthStateChanged(user =>  {
            dispatch({
                type: GET_USER, 
                payload: user
            });
        });
    }
}

export function getuser(){
    return dispatch => {
        auth.onAuthStateChanged(user =>  {
            dispatch({
                type: GET_USER, 
                payload: user
            });
        });
    }
}



export function googleLogin(){
    return dispatch => auth.signInWithPopup(googleProvider);
}


export function logout(){
    return dispatch => auth.signOut();
}