import type { SearchTypes } from '@/components/shared/search'

export type SearchValue = {
  searchQuery: string,
  types: SearchTypes,
  type: keyof SearchTypes;
}