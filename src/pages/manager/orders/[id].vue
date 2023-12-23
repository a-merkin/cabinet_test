<template>
  <div>
    <FixedLeftColumn>
      <template #fixed>
        <div class="flex column gap-base">
          <Button color="purple" size="large" class="button-back width100" @click="router.back">Назад</Button>
          <QueryForm @update-params="handleParamsChange" />
        </div>
      </template>
      <template #default>
        <div v-if="orders" class="flex column gap-base">
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
import { Button } from '@/ui/button'
import { internalAPIFetch } from "@/api/internal";

import { QueryForm } from "./components/QueryForm";
import type { QueryParams, Order } from "./types";
import type { YearParams } from "./components/YearPicker";
import type { SearchParams } from "./components/SearchPanel";

const route = useRoute()
const router = useRouter()

const queryParams: Ref<QueryParams> = ref({
  search_value: `${route.params.id}`,
  search_type: "order_number",
  year: "",
  date_start: "",
  date_finish: ""
});

const handleParamsChange = (params: QueryParams) => {
  queryParams.value = updateParams(queryParams.value, params);
};

const orders: Ref<Order[] | null> = ref(null);

const updateParams = (current: any, updates: YearParams | SearchParams) => {
  return { ...current, ...updates };
};

const fetchOrder = async () => {
  const data: string = await internalAPIFetch(`method/orders.getTest/`, { params: queryParams.value });
  const { response } = JSON.parse(data);
  orders.value = response.data.orders;
};

fetchOrder()

watch(queryParams, () => {
  fetchOrder()
});
</script>

<style lang="scss" scoped>
.button-back {
  display: none;

  @include active-by("lg") {
    display: block;
  }
}
</style>
