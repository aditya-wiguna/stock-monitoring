'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

export const SECTORS = [
  'All Sectors',
  'Banking',
  'Telecommunications',
  'Technology',
  'Consumer Goods',
  'Tobacco',
  'Automotive',
  'Coal Mining',
  'Metal & Mineral Mining',
  'Oil & Gas',
  'Petrochemical',
  'Renewable Energy',
  'Cement & Building Materials',
  'Construction',
  'Property',
  'Infrastructure',
  'Transportation',
  'Retail',
  'Media & Entertainment',
  'Poultry & Agriculture',
  'Palm Oil',
  'Textile & Garment',
  'Financial Services',
  'Insurance',
  'Investment Holding',
  'Heavy Equipment',
  'Hospital & Healthcare',
  'Packaging',
  'Steel',
  'Hotel & Tourism',
  'Shipping',
  'Chemical',
  'Cosmetics & Household',
  'Pulp & Paper',
  'Food Restaurant',
  'Electronics',
];

export const WATCHLIST_GROUPS = [
  'All Watchlist',
  'Prayogo Pangestu',
  'Haji Isam',
  'Bakrie',
];

export function StockFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSector = searchParams.get('sector') || '';
  const currentWatchlist = searchParams.get('watchlist') || '';

  const handleSectorChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'All Sectors' || value === '') {
      params.delete('sector');
    } else {
      params.set('sector', value);
    }
    // Remove watchlist if sector is selected
    if (value && value !== 'All Sectors') {
      params.delete('watchlist');
    }
    router.push(`?${params.toString()}`);
  };

  const handleWatchlistChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'All Watchlist' || value === '') {
      params.delete('watchlist');
    } else {
      params.set('watchlist', value);
    }
    // Remove sector if watchlist is selected
    if (value && value !== 'All Watchlist') {
      params.delete('sector');
    }
    router.push(`?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/');
  };

  const hasFilters = currentSector || currentWatchlist;

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-muted-foreground" />
        <span className="font-medium">Filters:</span>
      </div>

      <div className="flex flex-wrap gap-3">
        <Select
          value={currentSector || 'All Sectors'}
          onValueChange={handleSectorChange}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Sector" />
          </SelectTrigger>
          <SelectContent>
            {SECTORS.map((sector) => (
              <SelectItem key={sector} value={sector}>
                {sector}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={currentWatchlist || 'All Watchlist'}
          onValueChange={handleWatchlistChange}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="My Watchlist" />
          </SelectTrigger>
          <SelectContent>
            {WATCHLIST_GROUPS.map((group) => (
              <SelectItem key={group} value={group}>
                {group === 'All Watchlist' ? '⭐ All Watchlist' : `⭐ ${group}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasFilters && (
          <Button
            variant="outline"
            size="icon"
            onClick={clearFilters}
            title="Clear filters"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {hasFilters && (
        <div className="w-full mt-2 text-sm text-muted-foreground">
          {currentSector && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 mr-2">
              Sector: {currentSector}
            </span>
          )}
          {currentWatchlist && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 dark:bg-amber-900 rounded-full text-amber-700 dark:text-amber-300">
              ⭐ Watchlist: {currentWatchlist}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
