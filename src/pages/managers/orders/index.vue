<template>
  <div>
    <FixedLeftColumn>
      <template #fixed>
        <QueryForm @update-params="handleParamsChange" />
      </template>
      <template #default>
        <div class="flex column gap-base" v-if="orders">
          <StatusCard v-for="order in orders" :key="order.id">
            <p class="text-20 default-inner-gap">№: {{ order.id }}</p>
          </StatusCard>
        </div>
        <Empty v-else>Заказов еще нет</Empty>
      </template>
    </FixedLeftColumn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FixedLeftColumn from "@/views/layout/fixed-left-column.vue";
import { StatusCard } from "@/ui/status-card";
import { Empty } from "@/ui/empty";
import { internalAPIFetch } from "@/api/internal";

import { QueryForm } from "./components/QueryForm";
import type { QueryParams, Order } from "./types";
import type { YearParams } from "./components/YearPicker";
import type { SearchParams } from "./components/SearchPanel";

const queryParams: Ref<QueryParams> = ref({
  search_value: "",
  search_type: "",
  year: null
});

const handleParamsChange = (params: QueryParams) => {
  queryParams.value = updateParams(queryParams.value, params);
};

const orders: Ref<Order[] | null> = ref(null);

const updateParams = (current: any, updates: YearParams | SearchParams) => {
  return { ...current, ...updates };
};

watch(queryParams, () => {
  makeRequest().then(({ response }) => {
    orders.value = response.data.orders;
  });
});

const makeRequest = async () => {
  const data: string = await internalAPIFetch("method/orders.getTest", { params: queryParams.value });
  return JSON.parse(data);
};
</script>

<style scoped></style>
