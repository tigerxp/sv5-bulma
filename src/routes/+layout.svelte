<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import 'bulma/css/bulma.css';
	import Footer from '$lib/components/Footer.svelte';
	import TopNav from '$lib/components/TopNav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
	<TopNav />
	<main class="content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	main {
		padding: 1rem;
	}
</style>
