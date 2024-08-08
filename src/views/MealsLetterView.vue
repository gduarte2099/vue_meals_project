<template>
    <div class="flex flex-wrap justify-center gap-2 mt-2 py-4">
        <router-link v-for="letter in letters" :key="letter" :to="{ name: 'byLetter', params: { letter } }" class="r-link">
           <h2>{{ letter }}</h2>
        </router-link>
    </div>
    <MealsComp :meals="meals"></MealsComp>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealsComp from '../components/MealsComp.vue';
const letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('')
const route = useRoute()
const meals = computed(() => store.state.mealsByLetter)

//creo que este onMounted esta demas
onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

//se puede implementar el onclick para efectuar el cambio al buscar por una letra, pero en este caso usaremos watch()
watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>

<style scoped>

h2{
    font-size: 16px;
}

.r-link:hover {
    color: rgb(249, 115, 22);
    transition: 0.1s;
    padding-left: 1px;
    padding-right: 1px;
}</style>