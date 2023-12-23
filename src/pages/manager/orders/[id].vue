<template>
  <div>
    <div v-if="orders" class="flex column gap-base">
      <StatusCard v-for="order in orders" :key="order.id">
        <p class="text-20 default-inner-gap">№: {{ order.id }}</p>
      </StatusCard>
    </div>
    <Empty v-else>Заказов еще нет</Empty>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { StatusCard } from "@/ui/status-card";
import { Empty } from "@/ui/empty";
import { internalAPIFetch } from "@/api/internal";

import type { QueryParams, Order } from "./types";

const attrs = useAttrs();

definePageMeta({
  layout: "orders"
});

const route = useRoute();
const router = useRouter();

const queryParams: Ref<QueryParams> = ref({
  search_value: `${route.params.id}`,
  search_type: "order_number",
  year: "",
  date_start: "",
  date_finish: ""
});

const orders: Ref<Order[] | null> = ref(null);

const fetchOrder = async () => {
  const data: string = await internalAPIFetch(`method/orders.getTest/`, { params: queryParams.value });
  const { response } = JSON.parse(data);
  orders.value = response.data.orders;
};

fetchOrder();

watch(() => attrs.queryParams, () => {
  router.push({ path: "/manager/orders" })
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
