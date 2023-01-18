<script>
    import ProjectCard from '$lib/components/project-card.svelte'
    import ProjectsGrid from '$lib/components/projects-grid.svelte'
    export let data
    let projects = data.projects
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<h1 class="font-bold mb-20 text-center text-5xl">
    Recent Projects by Me
</h1>

<ProjectsGrid projects={projects}></ProjectsGrid>