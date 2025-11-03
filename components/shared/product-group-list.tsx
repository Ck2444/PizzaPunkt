'use client';
import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title } from '.';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategory = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = React.useRef<HTMLDivElement | null>(null); // прикрутить на тот объект, на который мы будем вешать обработку прокурти т.е. проверять на каком месте мы сейчас находимся и в зависимости от этого блока делать что-то
  // приведение типов только в месте вызова хука

  const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
    // сейчас этот блог в зоне видимости нашего экрана
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items
          .filter((el) => el.items.length > 0)
          .map((el, i) => (
            <ProductCard
              key={el.id}
              id={el.id}
              name={el.name}
              imageUrl={el.imageUrl}
              price={el.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};
