<script>
    import "./drawer.css";
    import { drawerOpen } from "../../../stores/appStore";
    import { slide } from "svelte/transition";
</script>

{#if $drawerOpen}
    <div
        class="drawer-container"
        transition:slide={{ duration: 500, axis: "x" }}
    >

    </div>
{/if}