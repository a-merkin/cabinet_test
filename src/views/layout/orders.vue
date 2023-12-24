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
        <slot />
      </template>
    </FixedLeftColumn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FixedLeftColumn from "@/views/layout/fixed-left-column.vue";
import { Button } from '@/ui/button'
import { QueryForm } from "@/components/QueryForm";
import type { QueryParams } from "@/pages/manager/orders/types";
import type { YearParams } from "@/components/YearPicker";
import type { SearchParams } from "@/components/SearchPanel";

const router = useRouter()
const route = useRoute()

const queryParams: Ref<QueryParams> = ref({
  search_value: "",
  search_type: "",
  year: "",
  date_start: "",
  date_finish: ""
});

const handleParamsChange = (params: QueryParams) => {
  queryParams.value = updateParams(queryParams.value, params);
  router.push({
    path: '/manager/orders/',
    query: { ...route.query, ...queryParams.value }
  });
};

const updateParams = (current: any, updates: YearParams | SearchParams) => {
  return { ...current, ...updates };
};

</script>

<style lang="scss" scoped>
.button-back {
  display: none;

  @include active-by("lg") {
    display: block;
  }
}
</style>
