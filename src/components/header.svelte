<script lang="ts">
	export let title: string = 'Header title';
</script>

<header>
	<div class="container">
		<h2>{title}</h2>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/blog/blog-post-1">Blog 1</a>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		background: #444;
		color: white;

		a {
			color: inherit;
		}
	}
</style>
