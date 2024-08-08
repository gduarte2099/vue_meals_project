<template>
    <h1 class="text-4xl font-bold mt-4 ml-8 text-orange-500">Meals for {{ route.params.ingredient }}</h1>
    <MealsComp :meals="meals"></MealsComp>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealsComp from '../components/MealsComp.vue';

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})


</script>

<style scoped>
</style>