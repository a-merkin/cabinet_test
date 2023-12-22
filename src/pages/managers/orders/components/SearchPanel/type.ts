import type { SearchTypes } from '@/components/shared/search'

export type SearchParams = {
  searchQuery: string,
  types: SearchTypes,
  type: keyof SearchTypes;
}