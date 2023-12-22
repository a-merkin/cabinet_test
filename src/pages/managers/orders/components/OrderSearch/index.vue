<template>
  <div class="block">
    <DateRange />
    <Search
      v-bind="searchValue"
      v-model:searchQuery="searchValue.searchQuery"
      v-model:type="searchValue.type"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { DateRange } from '@/ui/date-range'
import { Search } from '@/components/shared/search'
import type { SearchTypes } from '@/components/shared/search'

import type { SearchValue } from './type.ts'

const searchTypesValues: SearchTypes = {
  order_number: {
    placeholder: "Введите номер заказа",
    title: "Номер заказа"
  },
  psid: {
    placeholder: "Введите номер фотосессии",
    title: "Номер фотосессии"
  },
  client_id: {
    placeholder: "Введите ID клиента",
    title: "Клиент ID"
  },
  phone: {
    placeholder: "Введите номер телефона",
    title: "Телефон"
  },
  email: {
    placeholder: "Введите email",
    title: "Email"
  },
}

const searchValue: Ref<SearchValue> = ref({
  searchQuery: '',
  types: searchTypesValues,
  type: 'order_number'
})
</script>

<style scoped>

</style>./type