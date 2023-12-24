<template>
  <div>
    <Orders>
      <div v-if="orders" class="flex column gap-base">
        <StatusCard v-for="order in orders" :key="order.id">
          <p class="text-20 default-inner-gap">
            <NuxtLink :to="`/manager/orders/${order.id}`">№: {{ order.id }}</NuxtLink>
          </p>
        </StatusCard>
      </div>
      <Empty v-else>Заказов еще нет</Empty>
    </Orders>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { StatusCard } from "@/ui/status-card";
import { Empty } from "@/ui/empty";
import { internalAPIFetch } from "@/api/internal";
import Orders from "@/views/layout/orders.vue";

import type { Order, QueryParams } from "./types";

const route = useRoute();

const orders: Ref<Order[] | null> = ref(null);

const fetchOrders = async () => {
  const data: string = await internalAPIFetch(`method/orders.getTest/${route.params.slug}`, { params: route.query as QueryParams });
  const { response } = JSON.parse(data);
  orders.value = response.data.orders;
};

fetchOrders();

watch(
  () => route.query,
  () => {
    fetchOrders();
  }
);
</script>

<style lang="scss" scoped>
.button-back {
  display: none;

  @include active-by("lg") {
    display: block;
  }
}
</style>
