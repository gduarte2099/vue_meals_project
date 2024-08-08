<template>
    <a :href="href" target="_blank" class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 
            hover:bg-orange-700 hover:text-white transition-colors">
        <slot></slot>
    </a>
    <!--<router-link to="/" target="_blank"
                        class="px-3 py-2 rounded border-2 text-white border-purple-600 
                        bg-purple-500 hover:bg-purple-700 hover:text-white transition-colors">View</router-link>
                        -->
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>

<style scoped>
a:hover{
    cursor: pointer;
}
</style>