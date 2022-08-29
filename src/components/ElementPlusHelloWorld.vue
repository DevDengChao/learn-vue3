<script setup lang="ts">

import {ElButton} from "element-plus";
import { ref } from 'vue'

const count = ref(0);
</script>

<template>
  <div class="card">
    <p>
      Element Plus
    </p>
    <ElButton type="default" @click="count++" data-testid="element-plus-btn">count is {{ count }}</ElButton>
  </div>
</template>

<style scoped>
</style>
