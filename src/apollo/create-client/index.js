/**
 * A helper to create apollo client for GitHub GraphQL.
 */

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { graphql } from 'graphql';

const uri = 'https://api.github.com/graphql';

/**
 * Function to create the apollo client
 * 
 * @name createClient
 * @param {String} token - Github personal token
 * @returns Apollo client object
 * @example 
 * import createClient from '@bit/giladshoham.github-graphql.apollo.create-client';
 * 
 * const token = 'YOUR TOEKN HERE';
 * const client = createClient(token);
 */
export default function createClient(token) {
  if (!token) throw new Error('token was not provided');
  const httpLink = new HttpLink({ uri });  
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      } 
    });
  
    return forward(operation);
  })

  const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
  });

  return client;
}