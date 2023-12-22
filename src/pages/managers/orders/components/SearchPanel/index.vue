<template>
  <div class="block default-inner-gap width100">
    <div class="flex column gap-base">
      <DateRange v-model="rawDataRange" @change="handleDataRangeChange"/>
      <Search
        v-model:searchQuery="searchParams.search_value"
        v-model:type="searchParams.search_type"
        :types="searchTypesValues"
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
  search_type: 'order_number',
  date_start: '',
  date_finish: ''
})

const rawDataRange = ref([])

const handleDataRangeChange = ({date_start: dateStart, date_finish: dateFinish}: { date_start: string; date_finish: string }) => {
  searchParams.value.date_start = dateStart
  searchParams.value.date_finish = dateFinish
}

const updateParams = () => {
  emit('updateParams', searchParams.value)
}
</script>

<style scoped>

</style>./type