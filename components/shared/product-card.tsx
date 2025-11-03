import Link from 'next/link';
import React from 'react';
import { Title } from '.';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="p-6 bg-secondary rounded-lg h-[260px] flex flex-col items-center gap-3">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Hähnchen, Mozzarella, Cheddar- und Parmesankäse, Käsesoße, Tomaten, Alfredo-Soße,
          Knoblauch
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            ab <b>{price} €</b>
          </span>

          <Button
            variant="secondary"
            className="text-base font-bold text-[#FE5F00] bg-[rgba(255,250,244,1)] hover:bg-[rgba(255,250,244,0.8)] border-radius  rounded-[15px] cursor-pointer">
            <Plus size={20} className="mr-1" />
            Hinzufügen
          </Button>
        </div>
      </Link>
    </div>
  );
};
