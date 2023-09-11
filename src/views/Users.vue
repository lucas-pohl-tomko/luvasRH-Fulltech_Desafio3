<template>
    <div>
        
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800" v-for="(item, index) in el" :key="index">
                        <p class="text-2xl text-gray-400 dark:text-gray-500">
                            {{item.name}}
                        </p>
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(async () => {
    console.log(await getUsers())   
    el.value = await getUsers()
})
async function getUsers(){
    let users = await axios.get('http://localhost:5213/Employees');
    return users.data;
}
</script>
<style scoped>
    
</style>