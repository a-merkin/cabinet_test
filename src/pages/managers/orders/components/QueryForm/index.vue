<template>
  <div class="flex column gap-base">
    <SearchPanel @updateParams="handleParamsUpdate" />
    <YearPicker @updateParams="handleParamsUpdate" />
  </div>
</template>

<script setup lang="ts">
import { SearchPanel } from "../SearchPanel";
import { YearPicker } from "../YearPicker"

const emit = defineEmits(["updateParams"]);

const handleParamsUpdate = (params) => {
  emit('updateParams', params)
}
</script>

<style scoped></style>
