import React from "react";
import logo from './logo.svg';
import './App.css';

import Amplify from "aws-amplify";
//import Auth from '@aws-amplify/auth'; this not working
import "@aws-amplify/ui/dist/style.css";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import aws_exports from "./aws-exports";

//import { API } from "aws-amplify";

// in this way you are only importing Auth and configuring it.
Amplify.configure(aws_exports);


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, World!</p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);