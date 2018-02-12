/**
 * A fragment to fetch issues fields (title, url).
 */
import gql from 'graphql-tag';

const issuesFragment  = gql`
    fragment issues on Repository {
        issues(last:10, states:OPEN) {
            edges {
                node {
                    title
                    url
                }
            }
        }
    }
`

export default issuesFragment;