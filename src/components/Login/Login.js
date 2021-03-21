import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { riderContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}

const Login = () => {  
    const [loggedInUser, setLoggedInUser] = useContext(riderContext);
    
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        setLoggedInUser(signedInUser);
        history.replace(from);
    }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage)
    });     
    }
    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage)
        });
      }
    return (
        <div className="common">
            <div className="login">
                <h5><strong>Create an account</strong></h5>
                <button className="login-btn" onClick={handleSignWithGoogle}><span> <FontAwesomeIcon icon={faGoogle} /> </span>Continue with Google</button>
                <button className="login-btn" onClick={handleFacebookSignIn}><span> <FontAwesomeIcon icon={faFacebook} /> </span>Continue with Facebook</button>
            </div>
        </div>
    );
};

export default Login;