<template>
  <div>
    <FixedLeftColumn>
      <template #fixed>
        <div class="flex column gap-base">
          <SearchPanel />
          <YearPicker />
        </div>
      </template>
      <template #default>
        <StatusCard v-if="orders" />
        <Empty>Заказов еще нет</Empty>
      </template>
    </FixedLeftColumn>
  </div>
</template>

<script setup lang="ts">
import FixedLeftColumn from '@/views/layout/fixed-left-column.vue'
import { StatusCard } from '@/ui/status-card'
import { Empty } from '@/ui/empty'

import { SearchPanel } from './components/SearchPanel'
import { YearPicker } from './components/YearPicker'
</script>

<style scoped>

</style>