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
export const subtractDate = (dateFrom: string, dateTo: string) => {
  const date1 = new Date(dateFrom);
  const date2 = new Date(dateTo);
  const differenceMilliseconds = date2.getTime() - date1.getTime();
  const differenceDays = Math.floor(
    differenceMilliseconds / (1000 * 60 * 60 * 24)
  );
  const differenceHours = Math.floor(differenceMilliseconds / (1000 * 60 * 60));
  const differenceMinutes = Math.floor(differenceMilliseconds / (1000 * 60));
  if (differenceDays >= 1) {
    return `${date1.getDate()}/${date1.getMonth() + 1}/${date1.getFullYear()}`;
  }
  if (differenceHours >= 1) {
    return `${differenceHours} giờ trước`;
  }
  return `${differenceMinutes} phút trước`;
};
