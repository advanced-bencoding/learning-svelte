<script lang="ts">
    import { IconPlus } from '@tabler/icons-svelte';
    import IconButton from '../../../common/components/IconButton/IconButton.svelte';
    import { todos } from '../todoStore';
    import TodoItem from './TodoItem.svelte';

    function getTodaysDate(): string{
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    let editCache = {
        title: "",
        date: "",
    };
</script>

<div class="todo-container">
    <div class="todo__header">
        <IconButton onClick={() => {
            if(todos.canEnterEdit()){
                todos.addTodo({
                    createMode: true,
                    date: getTodaysDate(),
                    editMode: false,
                    isComplete: false,
                    title: "",
                });
            }
        }}>
            <div slot="icon">
                <IconPlus />
            </div>
        </IconButton>
    </div>
    <div class="todo__items">
        {#each $todos as todo, index}
            <TodoItem
                bind:createMode={todo.createMode}
                bind:editMode={todo.editMode}
                bind:title={todo.title}
                bind:date={todo.date}
                bind:isComplete={todo.isComplete}
                onEditConfirm={(e) => todos.editConfirm(index)}
                onEditCancel={(e) => { 
                    if(todo.createMode){
                        todos.removeTodo(index)
                    }
                    else if(todo.editMode){
                        $todos[index].title = editCache.title;
                        $todos[index].date = editCache.date;
                        $todos[index].editMode = false;
                    }
                }}
                onEditClick={(e) => {
                    if(todos.canEnterEdit()){
                        editCache.title = $todos[index].title;
                        editCache.date = $todos[index].date;
                        $todos[index].editMode = true;
                    }
                }}
                onDeleteClick={(e) => { todos.removeTodo(index) }}
            />
        {/each}
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