/**
 * A basic query which fetch basic info for repository (name, license, stars count).
 * @param {String} owner - the name of the repository owner
 * @param {String} repo - the name of the repository
 */

import gql from 'graphql-tag';
import issuesFragment from '../../fragments/issues-fragment';
import basicInfoFragment from '../../fragments/basic-info-fragment';

const repoQuery = gql`
  ${issuesFragment}
  ${basicInfoFragment}
  query repo($owner:String!, $name:String!) {
    repository(owner:$owner, name:$name) {
      nameWithOwner
      ...basicInfo
      ...issues
    }
  }
`;

export default repoQuery;