<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-center">
        <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 main-color">Home</router-link>
        <ul class="flex items-center gap-1">
            <li><router-link :to="{ name: 'byName' }"
                    class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 py-2 r-link">Search
                    Meals</router-link></li>
            <li><router-link :to="{ name: 'byLetter' }"
                    class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 py-2 r-link ">Meals
                    by
                    Letters</router-link></li>
            <li class="mr-2"><router-link :to="{ name: 'ingredients' }"
                    class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 py-2 r-link">Meals
                    by
                    Ingredients</router-link>
            </li>
        </ul>
    </header>
</template>

<script setup>
</script>

<style scoped>
.main-color {
    color: rgb(249, 115, 22);
    font-size: 20px;
    font-weight: 800;
}

.main-color:hover {
    transition: 0.1s;
    font-size: 22px;
}

.r-link:hover {
    background-color: rgb(249, 115, 22);
    color: white;
    /* transition: 0.1s;
    font-size: 15px; */
    border-radius: 5%;
}

li:hover {
    background-color: rgb(189, 104, 0);
    border-radius: 5%;
}
</style>