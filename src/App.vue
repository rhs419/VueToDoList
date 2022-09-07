<template>
    <table id = "todoContainer">
        <ToDoInput/>
        <ToDoList/>
        <DoneList/>
    </table>
</template>

<script>
import '@/../../vite-todolist/src/assets/script';
import DoneList from '../../vite-todolist/src/components/DoneList.vue';
import ToDoList from '../../vite-todolist/src/components/ToDoList.vue';
import ToDoInput from "@/../../vite-todolist/src/components/ToDoInput";


export default {
    name: 'App',
    components: {
        ToDoList,
        DoneList,
        ToDoInput
    }
}
</script>

<style>
@import '@/../../vite-todolist/src/assets/style';
</style>
