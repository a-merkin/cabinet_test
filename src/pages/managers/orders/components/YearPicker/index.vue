<template>
  <div class="block default-inner-gap width100">
    <div class="flex column gap-base">
      <Select
        :items="yearsItems"
        v-model="selectedYear"
      />
      <div class="flex justify-content-between">
        <Button color="purple" size="large">Показать</Button>
        <Button size="large">Сбросить</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Select } from '@/ui/select'
import type { SelectItems } from '@/ui/select'
import {Button} from '@/ui/button'

const yearsItems: SelectItems = [
  {
    title: 2023,
    value: 2023
  }
]

const selectedYear: Ref<SelectItems[number]> = ref(null)
</script>

<style scoped>

</style>