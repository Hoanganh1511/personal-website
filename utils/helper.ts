export const formatDateTime = (dateInput: string) => {
  const date = new Date(dateInput);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
