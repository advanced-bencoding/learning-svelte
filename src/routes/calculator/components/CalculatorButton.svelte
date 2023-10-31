<script lang="ts">
    export let displayVal: string;
    export let onClick: () => void;
    export let width: "1" | "2" | "3" | undefined = undefined;
</script>

<button
    class="calculator-button"
    on:click={onClick}
    style={width ? `grid-column: span ${width}` : ``}
>
    {displayVal}
</button>

<style>
    /* .button--no-style {
        all: unset;
    } */

    .calculator-button {
        width: 80px;
        height: 80px;
    }
</style>