import React, { Component } from 'react';
import logo from './logo.svg';
import {
  ApolloProvider,
} from 'react-apollo';
import './App.css';

import createClient from './apollo/create-client';
import RepoInfoWithData from './react/repo-info-issues';

const token = 'cb5d8ac369f395a74f8ce0849565f043010d34e3';
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
