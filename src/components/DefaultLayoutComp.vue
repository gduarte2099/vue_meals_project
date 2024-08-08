<template>
    <!--en el index se coloca min-h-full, y asi el h-full de este componente cubre bien la pagina-->
    <!---<div class="bg-gray-100 h-full">-->
    <NavbarComp></NavbarComp>
    <main>
        <div class="max-w-[1500px] mx-auto">
            <router-view></router-view>
        </div>
    </main>
    <!--</div>-->
</template>

<script setup>
import NavbarComp from './NavbarComp.vue';
</script>

<style scoped></style>