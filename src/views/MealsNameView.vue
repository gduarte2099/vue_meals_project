<template>
    <div class="p-6 pb-0">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals..."
            v-model="message" @change="searchMeals">
    </div>
    <MealsComp :meals="meals"></MealsComp>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store'
import { useRoute } from 'vue-router'
import MealsComp from '../components/MealsComp.vue';

const route = useRoute()
const message = ref('')
const meals = computed(() => store.state.searchedMeals)


function searchMeals() {
    if (message.value) {
        store.dispatch('searchMeals', message.value)
    } else {
        //llama a mutation para borrar los meals
        store.commit('setSearchedMeals', [])
    }

}

//guarda el mensaje puesto en la ruta para no ser escrito de nuevo en el input
onMounted(() => {
    message.value = route.params.name
    if (message.value) { //si existe algo en meals, llama a la funcion para buscar message
        searchMeals()
    }
})

</script>

<style scoped>
a {
    cursor: pointer;
}
</style>