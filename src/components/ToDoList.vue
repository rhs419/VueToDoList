<template>
    <tbody id="todo" v-if="todos.length>0">
        <tr>
            <td></td><td> 할일 {{todos.length}}</td>
        </tr>
    </tbody>
    <tbody id="todoList">
        <tr v-for="(todo, key) in todos" v-bind:key="key">
                <td><input type="checkbox" v-bind:id="'todoCheck'+todo.id" class="todoCheck"/></td>
                <td><label v-bind:id="'todoLabel'+todo.id">{{todo.todoText}}</label></td>
                <td><button type="button" v-bind:id="todo.id" class="delButton">삭제</button></td>
        </tr>
    </tbody>
</template>

<script>
import '@/assets/todoListJS'
export default {
    name: "ToDoList",
    props: {
        msg: String
    },
    data:()=>({
        todos: Object.keys(localStorage).filter(key=>key!='number'&&JSON.parse(localStorage.getItem(key)).checked==false)
            .map(key=>JSON.parse(localStorage.getItem(key)))
            .sort(id=>id)
    })
}
</script>

<style scoped>

</style>