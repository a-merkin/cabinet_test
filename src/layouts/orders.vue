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
        <NuxtPage :queryParams="queryParams" />
      </template>
    </FixedLeftColumn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FixedLeftColumn from "@/views/layout/fixed-left-column.vue";
import { Button } from '@/ui/button'
import { QueryForm } from "@/pages/manager/orders/components/QueryForm";
import type { QueryParams } from "@/pages/manager/orders/types";
import type { YearParams } from "@/pages/manager/orders/components/YearPicker";
import type { SearchParams } from "@/pages/manager/orders/components/SearchPanel";

definePageMeta({
  layout: 'default'
})

const router = useRouter()

const queryParams: Ref<QueryParams> = ref({
  search_value: "",
  search_type: "",
  year: "",
  date_start: "",
  date_finish: ""
});

const handleParamsChange = (params: QueryParams) => {
  queryParams.value = updateParams(queryParams.value, params);
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
