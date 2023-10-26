<script lang="ts">
    import type { TextBoxVariant } from "./types"

    export let variant: TextBoxVariant;
    export let label: string | undefined = undefined;
    export let placeholder: string | undefined = undefined;
    export let textBoxStyle = undefined;
    export let textBoxType = "text";
</script>

<div class="text-box-container">
    <slot title="startAdornment" />
    <input />
    <slot title="endAdornment" />
</div>

<style>
    .text-box-container {
        display: grid;
        grid-template-columns: 10% 80% 10%;
    }
</style>