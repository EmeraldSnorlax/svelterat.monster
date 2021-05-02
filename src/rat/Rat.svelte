<script lang="typescript">
  import Controls from "./Controls.svelte";
  import { step } from "../stores";
  import { onMount } from "svelte";

  let hue = 0;
  let last = 0;
  let tick = setInterval(() => {
    hue += $step;
    if (hue > 360) hue -= 360;
    else if (hue < 0) hue += 360;
  }, 10);
</script>

<Controls />
<div class="rounded-lg">
  <img
    style="filter: hue-rotate({hue}deg)"
    class="w-full"
    src="./bigrat.png"
    alt="bigrat"
  />
</div>
