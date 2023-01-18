 <script>
    import ProjectsGrid from "../lib/components/projects-grid.svelte";
    export let data
    let projects = data.projects
</script>

<svelte:head>
  <title>The Endurance Engineer</title>
</svelte:head>

{#each data.authors as { name, intro, picture: { url } }}
  <div class="flex mb-4 items-end">
    <div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      <p class="text-xl mb-4">{intro}</p>
    </div>

    <img class="mask mask-squircle h-48" src={url} alt={name} />
  </div>
{/each}

<ProjectsGrid projects={projects}></ProjectsGrid>