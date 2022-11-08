 <script>
    import ProjectCard from "../lib/components/project-card.svelte";
    export let data
</script>

<h1>Recent Projects by Me</h1>

<div>
  {#each data.projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
  {/each}
</div>