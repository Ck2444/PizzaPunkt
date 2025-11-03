'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  {
    id: 1,
    name: 'Pizzen',
  },
  {
    id: 2,
    name: 'Kombos',
  },
  {
    id: 3,
    name: 'Snacks',
  },
  {
    id: 4,
    name: 'Cocktails',
  },
  {
    id: 5,
    name: 'Kaffee',
  },
  {
    id: 6,
    name: 'Getränke',
  },
  {
    id: 7,
    name: 'Desserts',
  },
  {
    id: 8,
    name: 'Nachspeisen',
  },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map(({ name, id }, index) => (
        <a
          key={index}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-[rgba(254,95,0,1)]',
          )}
          href={`/#${name}`}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
