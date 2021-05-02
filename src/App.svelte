<script lang="typescript">
	import { onMount } from "svelte";
	import Warning from "./Warning.svelte";
	import { clickthrough } from "./stores";
</script>

{#if !$clickthrough}
<div class="flex items-center justify-center h-screen">
	<Warning />

</div>
{:else}
	<p>Clicked through!</p>
{/if}
