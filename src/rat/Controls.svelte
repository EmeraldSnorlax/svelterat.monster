<script lang="typescript">
  import { step } from "../stores";
  import { _ } from "svelte-i18n";
  $step = 3;
</script>

<div class="bg-blue-500 p-4">
  <div class="lg:flex lg:justify-between">
    <label class="text-white font-bold flex items-center">
      <span class="pr-3 m-2">{$_("controls.step")}</span>
      <input
        class="text-black p-2 mr-6"
        type="number"
        bind:value={$step}
        min="0"
        max="10"
      />
      <input class="w-full" type="range" bind:value={$step} min="0" max="100" />
    </label>
  </div>
</div>
