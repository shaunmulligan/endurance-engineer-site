<script>
    export let title = "Recent Blog Posts"
    export let posts = ['python','hypecycle','Distance, Climbing and Averages Data']
</script>
  
<div class="px-4">
    <h3>{title}</h3>
    <ul>
        {#each posts as post, index}
            <li>{index} - {post}</li>
        {/each}
    </ul>
</div>