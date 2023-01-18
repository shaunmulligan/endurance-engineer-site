<script>
	import Footer from '$lib/components/footer.svelte'
	import Navbar from '$lib/components/navbar.svelte'
	import '../app.postcss';
</script>

<Navbar />
<main class="container mx-auto px-4 mb-20">
  <slot />
</main>
<Footer />