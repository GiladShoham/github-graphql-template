import React, { Component } from 'react';
import logo from './logo.svg';
import {
  ApolloProvider,
} from 'react-apollo';
import './App.css';

import createClient from './apollo/create-client';
import RepoInfoWithData from './react/repo-info-issues';

const token = 'YOUR TOEKN HERE';
const client = createClient(token);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>GraphQL + Bit = ♥ </h2>
          </div>
          <RepoInfoWithData owner="teambit" name="bit"/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
