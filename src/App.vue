<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const handleClick = () => {
  count.value++
}

</script>

<template>
  <div>
    你已经点击了 {{ count }} 次
  </div>
  <div>
    <button @click="handleClick">
      点击
    </button>
  </div>
</template>

<style scoped>
</style>
