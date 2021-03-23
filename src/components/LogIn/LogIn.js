import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import './LogIn.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const LogIn = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser)
      history.replace(from);

    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      alert('Please try again')
    });
  }

  return (
    <div>
      <img className="icon-img" src="https://i.ibb.co/vJ36rM4/Group-1329.png" alt="" />
      <Card className="card-style" >

        <div className="my-5">
          <h3>Login With</h3>
          <button className="google-button my-3" onClick={handleGoogleSignIn}>Continue with Google</button>
          <p>Don't have account?<span className="commonColor">Create a account</span></p>
        </div>
      </Card>
    </div>
  );
};

export default LogIn;