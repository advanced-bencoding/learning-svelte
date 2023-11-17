<script lang="ts">
    import { IconX, IconCheck, IconPencil, IconTrash } from '@tabler/icons-svelte';
    import IconButton from '../../../common/components/IconButton/IconButton.svelte';
  import type { Todo } from '../todoStore';

    export let createMode: boolean;
    export let editMode: boolean;
    export let date: string;
    export let title: string;
    export let isComplete: boolean;
    export let onEditConfirm: (event: Event) => void;
    export let onEditCancel: (event: Event) => void;
    export let onEditClick: (event: Event) => void;
    export let onDeleteClick: (event: Event) => void;
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
                <div slot="icon">
                    <IconCheck />
                </div>
            </IconButton>
            <IconButton onClick={onEditCancel}>
                <div slot="icon">
                    <IconX />
                </div>
            </IconButton>
        {:else}
            <IconButton onClick={onEditClick}>
                <div slot="icon">
                    <IconPencil />
                </div>
            </IconButton>
            <IconButton onClick={onDeleteClick}>
                <div slot="icon">
                    <IconTrash />
                </div>
            </IconButton>
        {/if}
    </div>
</div>

<style>
    .todo-item {
        height: auto;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 4fr 2fr;
        align-items: center;
    }

    .todo-item__body {
        display: flex;
        align-items: center;
    }

    .todo-item__actions {
        display: flex;
    }
</style>