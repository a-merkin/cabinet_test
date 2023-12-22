<template>
  <div>
    <FixedLeftColumn>
      <template #fixed>
        <QueryForm @update-params="handleParamsChange" />
      </template>
      <template #default>
        <StatusCard v-if="orders" />
        <Empty>Заказов еще нет</Empty>
      </template>
    </FixedLeftColumn>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

import FixedLeftColumn from '@/views/layout/fixed-left-column.vue'
import { StatusCard } from '@/ui/status-card'
import { Empty } from '@/ui/empty'

import { QueryForm } from './components/QueryForm'
import type { QueryParams } from './types'
import type { YearParams } from './components/YearPicker'
import type { SearchParams } from './components/SearchPanel'

const queryParams: Ref<QueryParams> = ref({
  searchQuery: '',
  type: '',
  year: null,
})

const handleParamsChange = (params: QueryParams) => {
  queryParams.value = updateParams(queryParams.value, params)
}

const updateParams = (current: any, updates: YearParams | SearchParams) => {
  return { ...current, ...updates };
}
</script>

<style scoped>

</style>