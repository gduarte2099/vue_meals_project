<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-64 object-cover">
        </router-link>
        <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim quia deserunt dolorum assumenda.
                Nobis culpa perspiciatis alias dolores suscipit.</p>
            <div class="mt-4 flex items-center justify-between">
                <YouTubeButtonComp :href="meal.strYoutube">Go to Youtube</YouTubeButtonComp>
            </div>
        </div>
    </div>
</template>

<script setup>
//import { defineProps } from 'vue';
import YouTubeButtonComp from '../components/YouTubeButtonComp.vue';

const { meal } = defineProps({
    meal: Object
})

</script>

<style scoped></style>