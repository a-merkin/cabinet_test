<template>
  <div class="flex column gap-base">
    <SearchPanel @update-params="handleParamsUpdate" />
    <YearPicker @update-params="handleParamsUpdate" />
  </div>
</template>

<script setup lang="ts">
import { SearchPanel } from "../SearchPanel";
import { YearPicker } from "../YearPicker"
import type { YearParams } from "../YearPicker";
import type { SearchParams } from "../SearchPanel";

const emit = defineEmits(["updateParams"]);

const handleParamsUpdate = (params: YearParams | SearchParams) => {
  emit('updateParams', params)
}
</script>

<style scoped></style>
