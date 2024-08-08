<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItemComp v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItemComp>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600">
        <h3>There are no meals</h3> 
    </div>
</template>

<script setup>
import MealItemComp from './MealItemComp.vue';

const { meals } = defineProps({
    meals: {
        required: true,
        type: Array,
        default: () => []
    }
})

</script>

<style scoped></style>