<script lang="typescript">
	import Warning from "./Warning.svelte";
	import Rat from "./rat/Rat.svelte";
	import { clickthrough } from "./stores";
	import { isLoading } from "svelte-i18n";
	import * as locales from "./locales/loader";

	locales.initialize();
</script>

{#if $isLoading}
	Fetching locales, please wait...
{:else if !$clickthrough}
	<div class="flex items-center justify-center h-screen">
		<Warning />
	</div>
{:else}
	<div class="h-screen">
		<Rat />
	</div>
{/if}
