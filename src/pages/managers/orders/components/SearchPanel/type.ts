import type { SearchTypes } from '@/components/shared/search'

export type SearchParams = {
  search_value: string,
  search_type: keyof SearchTypes;
}