<script lang="ts">
    import { IconPlus } from '@tabler/icons-svelte';
  import IconButton from '../../../common/components/IconButton/IconButton.svelte';
</script>

<div class="todo-container">
    <div class="todo__header">
        <IconButton>
            <div slot="icon">
                <IconPlus />
            </div>
        </IconButton>
    </div>
    <div class="todo__items">
        <iconify-icon icon=""></iconify-icon>
    </div>
</div>

<style>
    .todo-container {
        background-color: white;
        border-radius: 10px;
        width: 600px;
        height: 800px;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        display: grid;
        grid-template-rows: 100px auto;
    }

    .todo_header {

    }
</style>