import React from 'react';

export const useFilters = (initState) => {
  const [filters, setFilters] = React.useState(initState);

  const changeFilter = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
