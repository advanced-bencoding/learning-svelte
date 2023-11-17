import { writable } from "svelte/store";

export interface Todo {
    title: string;
    date: string;
    createMode: boolean;
    editMode: boolean;
    isComplete: boolean;
}

function initializeTodos(){
    const { subscribe, update, set } = writable<Todo[]>([]);

    return {
        subscribe,
        set,
        addTodo: (todo: Todo) => update((state) => [...state, todo]),
        removeTodo: (idx: number) => update((state) => state.filter((_, index) => index !== idx)),
        editConfirm: (idx: number) => update((state) => state.map((todo, index) => {
            if(idx === index){
                return {...todo, createMode: false, editMode: false};
            }
            return todo;
        })),
        canEnterEdit: () => {
            let state: Todo[] = [];
            subscribe(value => {
                state = value;
            })();
            return !state.some(todo => todo.editMode || todo.createMode);
        }
    }
}

export const todos = initializeTodos();
