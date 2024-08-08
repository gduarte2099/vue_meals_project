<template>
    <div class="flex flex-col p-8">
    </div>
    <MealsComp :meals="meals"></MealsComp>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosService.js'
import MealsComp from '../components/MealsComp.vue';

const meals = ref([])


//const ingredients = ref([])
/*onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    //console.log(response.data)
    ingredients.value = response.data
})*/
/*
onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals
        })
})*/

onMounted(async () => {
    for (let i = 0; i < 12; i++) {
        axiosClient.get(`random.php`).then(({ data }) => meals.value.push(data.meals[0]))
    }
})

</script>

<style scoped></style>