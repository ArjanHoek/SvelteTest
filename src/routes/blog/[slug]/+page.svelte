<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const { title, content } = data;
</script>

<h1>{title}</h1>

{@html content}
