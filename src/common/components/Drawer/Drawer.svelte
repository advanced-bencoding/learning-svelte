<script lang="ts">

    import "./drawer.css";
    import { drawerOpen } from "../../../stores/appStore";
    import { slide } from "svelte/transition";
    import type { IDrawerConfig } from "./drawer-types";

    export let drawerConfig: IDrawerConfig[];

</script>

{#if $drawerOpen}
    <div
        class="drawer-container"
        transition:slide={{ duration: 500, axis: "x" }}
    >
        {#each drawerConfig as drawerItem (drawerItem.id)}
            <button class="drawer__item">
                <a href={drawerItem.navLink}>{drawerItem.label}</a>
            </button>
        {/each}
    </div>
{/if}