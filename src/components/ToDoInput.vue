<template>
    <tbody>
        <tr>
            <td id="labelTd"><label id="todoLabel" for="toDoInput">+</label></td>
            <td id="inputTd"><input id="toDoInput" type="text" autocomplete="off"
                                    placeholder="할일추가"/></td>
            <td><button type="submit" id="addButton">추가</button></td>
        </tr>
    </tbody>
</template>

<script>
import '@/assets/todoInputJS'
export default {
    name: "ToDoInput"
}
</script>

<style scoped>

</style>