<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['name'],
})
</script>

<template>
  <option :value="name">
    {{ name }}
  </option>
</template>

<style scoped>
option {
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  color: #202124;
  position: relative;
  margin-left: 0;
}
</style>
