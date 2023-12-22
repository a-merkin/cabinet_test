<template>
  <div class="block default-inner-gap width100">
    <div class="flex column gap-base">
      <DateRange />
      <Search
        :searchQuery="searchParams.search_value"
        :type="searchParams.search_type"
        :types="searchTypesValues"
        v-model:searchQuery="searchParams.search_value"
        v-model:type="searchParams.search_type"
        @submit="updateParams"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { DateRange } from '@/ui/date-range'
import { Search } from '@/components/shared/search'
import type { SearchTypes } from '@/components/shared/search'

import type { SearchParams } from './type.ts'

const emit = defineEmits(["updateParams"]);

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

const searchParams: Ref<SearchParams> = ref({
  search_value: '',
  search_type: 'order_number'
})

const updateParams = () => {
  emit('updateParams', searchParams.value)
}
</script>

<style scoped>

</style>./type