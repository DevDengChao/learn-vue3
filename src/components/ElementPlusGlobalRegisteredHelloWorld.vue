<script setup lang="ts">

import {ref} from 'vue'

const count = ref(0);
</script>

<template>
  <div class="card">
    <p>
      Element Plus (Global registered)
    </p>
    <ElButton type="default" @click="count++" data-testid="element-plus-global-btn">count is {{ count }}</ElButton>
  </div>
</template>

<style scoped>
</style>
