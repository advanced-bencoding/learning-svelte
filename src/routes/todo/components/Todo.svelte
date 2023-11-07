<script lang="ts">
    import { IconPlus } from '@tabler/icons-svelte';
    import IconButton from '../../../common/components/IconButton/IconButton.svelte';
</script>

<div class="todo-container">
    <div class="todo__header">
        <IconButton onClick={() => { console.log("add") }}>
            <div slot="icon">
                <IconPlus />
            </div>
        </IconButton>
    </div>
    <div class="todo__items">
    </div>
</div>

<style>
    .todo-container {
        background-color: white;
        border-radius: 10px;
        width: 500px;
        height: 700px;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        padding: 20px 30px;
    }

    .todo__header {
        display: flex;
        justify-content: flex-end;
    }

    .todo__items {
        height: auto;
    }
</style>