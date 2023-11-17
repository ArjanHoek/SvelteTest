<script>
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
</script>

<Header title="Test project" />

<main>
	<div class="container">
		<slot />
	</div>
</main>

<Footer />

<style lang="scss">
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}

	:global(.container) {
		margin: 0 auto;
		max-width: 50rem;
		padding: 0.5rem;
	}
</style>
