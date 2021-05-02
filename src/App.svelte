<script lang="typescript">
	import { onMount } from "svelte";
	import Warning from "./Warning.svelte";
	let clickThrough = false;
</script>

{#if !clickThrough}
	<Warning />
{:else}
	<p>Clicked through!</p>
{/if}
