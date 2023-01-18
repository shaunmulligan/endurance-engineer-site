<script>
    export let url = ''
    export let name = ''
    export let slug = ''
    // export let description = ''
  </script>
  
  <div class="relative group card shadow-2xl col-span-2 h-96">
    <a href={`/projects/${slug}`} class="object-cover h-full">
      <img src={url} alt={name} class="object-cover h-full rounded-lg" />
      <div class="absolute bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-100 bg-primary p-4 duration-300 text-primary-content rounded-b-lg">
        <h2 class="font-bold lg:text-xl">{name}</h2>

      </div>
    </a>
  </div>