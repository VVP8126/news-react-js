export const formatParsedDate = (date: string) => {
  const parsed = Date.parse(date);
  const asDate = new Date(parsed);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return asDate.toLocaleDateString('en-US', options);
};
