import { Api } from '@/sevices/api-client';
import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';

interface ReturnProps {
  ingredients: Ingredient[];
}

// useEffect doesn't work with trycatch
export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients };
};
