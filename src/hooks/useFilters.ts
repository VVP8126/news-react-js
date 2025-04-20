import React from 'react';
import { IFilters } from '../interfaces';

export const useFilters = (initState: IFilters) => {
  const [filters, setFilters] = React.useState<IFilters>(initState);

  const changeFilter = (key: string, value: string | null | number) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
