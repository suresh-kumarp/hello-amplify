import React from "react";
import logo from './logo.svg';
import './App.css';

import Amplify from "aws-amplify";
//import Auth from '@aws-amplify/auth'; this not working
import "@aws-amplify/ui/dist/style.css";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import aws_exports from "./aws-exports";

import { API } from "aws-amplify";

//import axios from "axios";

// in this way you are only importing Auth and configuring it.
Amplify.configure(aws_exports);


class App extends React.Component {

  callAmplifyApi = () => {
    API.get('sktodos', '/items', {});
  };

  // callSlsApi = () => {
  //   axios
  //     .get('https://wq5lde8uj2.execute-api.us-east-2.amazonaws.com/dev/todos')
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, World!</p>
          <button onClick={this.callAmplifyApi}>Call Amplify Rest API</button>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);