export const formatDateTime = (dateInput: string) => {
  const date = new Date(dateInput);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateTime2 = (dateInput: string) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateInput).toLocaleDateString("en-US", options);
};
