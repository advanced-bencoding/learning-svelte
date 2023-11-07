<script lang="ts">
    import { IconX, IconCheck, IconPencil, IconTrash } from '@tabler/icons-svelte';
    import IconButton from '../../../common/components/IconButton/IconButton.svelte';

    export let title: string;
    export let date: string;
    export let createMode: boolean;
    export let editMode: boolean;
    export let isComplete: boolean;
    export let onEditConfirm: (idx: number) => void;
    export let onEditCancel: (idx: number) => void;
    export let onEditClick: (idx: number) => void;
    export let onDeleteClick: (idx: number) => void;
</script>

<div class="todo-item">
    <div class="todo-item__checkbox">
        {#if !createMode && !editMode}
            <input type="checkbox" bind:checked={isComplete} />
        {/if}
    </div>
    <div class="todo-item__body">
        {#if createMode || editMode}
            <input type="date" bind:value={date} />
            <input type="text" bind:value={title} />
        {:else}
            <p>{date}</p>
            <h3>{title}</h3>
        {/if}
    </div>
    <div class="todo-item__actions">
        {#if createMode || editMode}
            <IconButton onClick={onEditConfirm}>
                <IconCheck />
            </IconButton>
            <IconButton onClick={onEditCancel}>
                <IconX />
            </IconButton>
        {:else}
            <IconButton onClick={onEditClick}>
                <IconPencil />
            </IconButton>
            <IconButton onClick={onDeleteClick}>
                <IconTrash />
            </IconButton>
        {/if}
    </div>
</div>

<style>
    .todo-item {
        height: 200px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 4fr 2fr;
    }

    .todo-item__body {

    }

    .todo-item__actions {

    }
</style>