<template>
    <table id = "todoContainer">
        <ToDoInput/>
        <ToDoList/>
        <DoneList/>
    </table>
</template>

<script>
import '@/assets/script';
import DoneList from './components/DoneList.vue';
import ToDoList from './components/ToDoList.vue';
import ToDoInput from "@/components/ToDoInput";


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
@import '@/assets/style';
</style>
