'use client';
import React from 'react';
import { FilterCheckbox, Title } from '.';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients } = useFilterIngredients();

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  return (
    <div className={className}>
      <Title text="Filtering" size="sm" className="mb-5 font-bold" />
      {/* Top checkboxes */}

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Kann zusammengestellt werden" value="1" />
        <FilterCheckbox text="Neuheiten" value="2" />
      </div>

      {/* Price filter */}

      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Preis von bis</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={30} defaultValue={0} />
          <Input type="number" min={0} max={30} placeholder="30" />
        </div>

        <RangeSlider min={0} max={30} step={1} value={[0, 30]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
      />
    </div>
  );
};
