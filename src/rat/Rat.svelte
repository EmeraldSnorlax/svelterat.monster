<script lang="typescript">
  import Controls from "./Controls.svelte";
  import { step } from "../stores";
  import { onMount } from "svelte";

  let hue = 0;

  setInterval(() => {
    hue += $step;
    if (hue > 360) hue -= 360;
    else if (hue < 0) hue += 360;
  }, 10);
</script>

<Controls />
<div>
  <img
    style="filter: hue-rotate({hue}deg)"
    class="max-w-full max-h-full"
    src="./bigrat.png"
    alt="bigrat"
  />
</div>
