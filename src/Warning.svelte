<script lang="typescript">
  import { fade } from "svelte/transition";
  import { _ } from "svelte-i18n";
  import { clickthrough } from "./stores";
  import { onMount } from "svelte";
  let waitTime = 4;
  let wait = waitTime;

  onMount(() => {
    let tick = setInterval(() => {
      wait -= 0.02;
      if (wait < 0) clearInterval(tick);
    }, 20);
  });
</script>

<div class="flex items-center justify-center rounded-md shadow-2xl bg-true-gray-700">
  <div>
    <div class="flex justify-center" />
    <h1 class="font-bold text-2xl pt-5 md:pt-0 text-center">
      {$_('page.title')}
    </h1>
    <p class="text-xl md:text-center m-4">
      {$_("warning.text")}
    </p>
    <div class="flex justify-center">
      <div>
        {#if wait < 0}
          <button
            transition:fade
            on:click={() => ($clickthrough = true)}
            class="bg-green-600 p-4 rounded-md w-full mx-4 mt-4 mb-0 hover:bg-green-700 hover:shadow-md transition-all"
            >{$_("warning.button")}</button
          >
        {/if}
        <progress
          class="w-full mx-4 h-1 transition-transform transform -translate-y-2"
          value={wait}
          max={waitTime}
        />
      </div>
    </div>
  </div>
</div>
