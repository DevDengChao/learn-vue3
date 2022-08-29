<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0);
</script>

<template>
  <div class="card">
    <p>
      Native HTML
    </p>
    <button type="button" @click="count++" data-testid="btn">count is {{ count }}</button>
  </div>

</template>

<style scoped>
</style>
