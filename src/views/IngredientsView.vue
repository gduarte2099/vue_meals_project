<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <input type="text" class="rounded border-2 border-gray-200 w-full mb-3" placeholder="Search for ingredients..."
            v-model="message">
        <div class="div-ing">
            <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
                v-for="ingredient in computedIngredients" :key="ingredient.idIngredient"
                class="bg-white rounded p-3 mb-3 shadow block">
                <h3 class="text-2xl font-bold mb-2 ">{{ ingredient.strIngredient }}</h3>
                <!--<p>{{ ingredient.strDescription }}</p>-->
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import axiosClient from '../axiosService';

const ingredients = ref([])
const message = ref('')
const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients.value;
    return ingredients.value.filter(i => i.strIngredient.toLowerCase().includes(message.value.toLowerCase()))
})

onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals
        })
})

</script>

<style scoped>
.div-ing {
    column-count: 2;
    column-width: 200px;
    column-gap: 25px;
}
</style>