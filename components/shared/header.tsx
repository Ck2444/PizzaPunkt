import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Container } from './container';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from '.';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b border-[rgba(237,237,237,1)]', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Linke Seite */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/Logo.svg" width={35} height={35} alt="Logo" />

            <div>
              <h1 className="text-2x1 uppercase font-black">PizzaPunkt</h1>
              <p className="text-sm text-gray-400 leading-3">Leckerer geht’s nicht</p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 ">
          <Button variant="outline" className="flex items-center rounded-[15px]">
            <User size={16} />
            Einloggen
          </Button>

          <div>
            <Button className="group relative rounded-[15px] bg-[rgba(254,95,0,1)] hover:bg-[rgba(254,95,0,0.9)] transition-all text-white">
              <b>20 €</b>
              <span className="w-px h-[25px] bg-[rgba(255,255,255,0.25)] mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
