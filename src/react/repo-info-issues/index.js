/**
 * A react component which shows issues list of a github repository.
 * 
 * ```js
 * import RepoInfoWithData from '@bit/giladshoham.github-graphql.react.repo-info-issues';
 * 
 * <RepoInfoWithData owner="ownerName" name="repoName"/>
 * ```
 * 
 * @property {String} ownerName - the name of the repository owner
 * @property {String} repoName - the name of the repository
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {graphql} from 'react-apollo';
import { GraphQLString } from 'graphql';
import repoQuery from '../../queries/repo-info-issues';

const RepoInfo = ({ data: {loading, error, repository }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   const lastUpdated = new Date(repository.updatedAt);

   return ( 
    <div>
      <h2> {repository.nameWithOwner} </h2>
      <div>
        <span style={{marginRight: '10px'}}> {repository.primaryLanguage.name} </span>
        <svg aria-label="stars" className="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 14" width="14"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        <span style={{marginRight: '10px'}}> {repository.stargazers.totalCount} </span>
        <svg aria-label="forks" className="octicon octicon-repo-forked" height="16" role="img" version="1.1" viewBox="0 0 10 14" width="10"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        <span style={{marginRight: '10px'}}> {repository.forks.totalCount} </span>
        <span> last updated at {lastUpdated.toLocaleDateString()} </span>
      </div>
      <ul style={{'listStyleType': 'none'}}>
        { repository.issues.edges.map( issue => (
          <li style={{'textAlign': 'left'}} key={issue.node.url}><a href={issue.node.url} >{issue.node.title}</a>
          </li>) ) }
      </ul>
    </div>
   )
 };

 const RepoInfoWithData = graphql(repoQuery, {
   options: ({ owner, name }) => ({ variables: { owner, name } }),
 })(RepoInfo);

 export default RepoInfoWithData;