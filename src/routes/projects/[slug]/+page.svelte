<script>
    import { marked } from 'marked'
    import PostSidebar from '$lib/components/posts-sidebar.svelte'
    export let data
    let project = data.project
    let relatedPosts = data.relatedPosts
    let images = data.project.image
</script>

<svelte:head>
  <title>Projects | {project.name}</title>
</svelte:head>

<div class="bg-white">
  <div class="mx-auto grid max-w-2xl grid-cols-1  gap-y-16 gap-x-8 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.name}</h2>
      <p class="mt-4 text-gray-500">A cycling computer built on a raspberry pi 2W using primarily web technologies and off the shelf electronics.</p>

      <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">The Sauce</dt>
          <dd class="mt-2 text-sm text-gray-500"><a class="mr-5" href={project.demo}>Demo</a></dd>
          <dd class="mt-2 text-sm text-gray-500"><a href={project.sourceCode}>Source Code: {project.sourceCode}</a></dd>
        </div>

        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Tags</dt>
          <div>
            {#if project.tags}
              {#each project.tags as tag}
                <span
                  class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer"
                  >{tag}</span>
              {/each}
            {/if}
          </div>
        </div>

        {#if relatedPosts.length > 0}
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Related Blog Posts</dt>
            {#each relatedPosts as post}
              <dd class="mt-2 text-sm text-gray-500"><a href={`/posts/${post.slug}`}>- {post.title}</a></dd>
            {/each}
          </div>
        {/if}

      </dl>
    </div>
    
    <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      {#each images as image}
        <img class="rounded-lg max-h-48" src={image.url}/>
      {/each}
    </div>
  </div>
</div>


<article class="prose prose-xl">
  {@html marked(project.description)}
</article>