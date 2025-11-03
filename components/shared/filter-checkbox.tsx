import React, { ReactNode } from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: ReactNode; // можно дополнительно задачть что то после текста JSX или иконку
  onCheckedChange?: (checked: boolean) => void; //  каждый раз когда мы кликаем на чек бокс мы можем выташиит булиевое значение и понять true или false
  checked?: boolean; // ну и мамо состояние checked true или false
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-lg w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label htmlFor={`checkbox-${String(value)}`} className="leading-none cursor-pointer flex-1">
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
