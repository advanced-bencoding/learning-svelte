<script lang="ts">
    export let onClick: (...args: any[]) => void;
</script>

<button class="icon-button" on:click={onClick}>
    <slot name="icon" />
</button>

<style>
    .icon-button {
        display: flex;
        align-items: center;
        padding: 8px;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .icon-button :hover {
        background-color: gray
    }

    .icon-button:hover {
        background-color: #f0f0f0;
    }

    .icon-button:active {
        background-color: #d0d0d0;
    }
</style>