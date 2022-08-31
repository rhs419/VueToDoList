<template>
    <tbody id="done" v-if="todos.length>0">
        <tr>
            <td></td><td> <span id="doneSpan"><label id="arrow">v</label> 완료됨 {{ todos.length }}</span></td>
        </tr>
    </tbody>
    <tbody id="doneList">
        <tr v-for="(todo, key) in todos" v-bind:key="key">
            <td><input type="checkbox" v-bind:id="'todoCheck'+todo.id" class="todoCheck" checked/></td>
            <td><label v-bind:id="'todoLabel'+todo.id" class="checked">{{todo.todoText}}</label></td>
            <td><button type="button" v-bind:id="todo.id" class="delButton">삭제</button></td>
        </tr>
    </tbody>
</template>

<script>
import '@/assets/todoListJS'
export default {
    name: "DoneList",
    data:()=>({
        todos: Object.keys(localStorage).filter(key=>key!='number'&&JSON.parse(localStorage.getItem(key)).checked==true)
            .map(key=>JSON.parse(localStorage.getItem(key)))
            .sort(id=>id)
    })
}
</script>

<style scoped>

</style>