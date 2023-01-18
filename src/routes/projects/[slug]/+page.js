import { client } from '$lib/graphql-client'
import { projectQuery, postsByTagQuery  } from '$lib/graphql-queries'

export const load = async ({ params }) => {
  const { slug } = params
  const variables = { slug }
  const { project } = await client.request(projectQuery, variables)
  console.log(project)
  const relatedByTag = await client.request(postsByTagQuery, {"tags": project.tags} )
  console.log(relatedByTag)
  let relatedPosts = relatedByTag.posts
  return {
      project,
      relatedPosts,
  }
}