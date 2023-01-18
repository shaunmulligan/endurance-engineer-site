<script>
    import ProjectCard from '$lib/components/project-card.svelte'
    export let projects;
</script>

<div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {#each projects as { name, slug, description, image }, index}
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <ProjectCard
                {name}
                {description}
                url={image[0].url}
                {slug}
                />
            </div>
        {/each}
    </div>
</div>