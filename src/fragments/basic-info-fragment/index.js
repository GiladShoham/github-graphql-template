/**
 * A fragment to fetch basic info for repository (stars count, forks count, primary language, updatedAt).
 */
import gql from 'graphql-tag';

const basicInfoFragment  = gql`
    fragment basicInfo on Repository {
        stargazers{
            totalCount
        }
        forks{
            totalCount
        }
        primaryLanguage {
            name 
        }
        updatedAt
    }
`

export default basicInfoFragment;