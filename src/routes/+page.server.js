import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'
 
export async function load({ params }) {
    const query = gql`
          query GetProjects {
            projects {
              name
              slug
              description
              demo
              sourceCode
              image {
                url
              }
            }
          }
        `
    const { projects } = await client.request(query)
    return {
        projects,
    }
}