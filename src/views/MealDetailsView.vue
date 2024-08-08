<template>
    <div class="max-w-[800px] mx-auto pt-3 pb-10">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <p><strong class="font-bold">Category: </strong>{{ meal.strCategory }}</p>
            <p><strong class="font-bold">Area: </strong>{{ meal.strArea }}</p>
            <p><strong class="font-bold">Tags: </strong>{{ meal.strTags }}</p>
        </div>
        <div class="my-3">
            {{ meal.strInstructions }}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="tex-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(ingredient, index) in new Array(20)" :key="index">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1 }} - {{ meal[`strIngredient${index + 1}`] }}</li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="tex-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="(measure, index) in new Array(20)" :key="index">
                        <li v-if="meal[`strMeasure${index + 1}`]">
                            {{ index + 1 }} - {{ meal[`strMeasure${index + 1}`] }}</li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="mt-4">
            <YouTubeButtonComp :href="meal.strYoutube">Go to Youtube</YouTubeButtonComp>
            <a :href="meal.strSource" target="_blank" class="px-3 ml-2 py-2 border-2 rounded text-indigo-600 
            hover:bg-indigo-600 hover:text-white transition-colors">Source
            </a>
        </div>
    </div>
</template>

<script setup>
//import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosService';
import YouTubeButtonComp from '../components/YouTubeButtonComp.vue'

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get('lookup.php?i=' + route.params.id)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
            console.log(data.meals[0]);
        })
})

</script>

<style scoped></style>