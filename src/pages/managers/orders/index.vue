<template>
  <div>
    <FixedLeftColumn>
      <template #fixed>
        <OrderSearch />
      </template>
    </FixedLeftColumn>
  </div>
</template>

<script setup lang="ts">
import FixedLeftColumn from '@/views/layout/fixed-left-column.vue'

import { OrderSearch } from './components/OrderSearch'
import { YearPicker } from './components/YearPicker'
</script>

<style scoped>

</style>