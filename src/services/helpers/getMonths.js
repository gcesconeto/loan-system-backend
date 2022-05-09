module.exports = (date) => {
  const then = new Date(date);
  const now = new Date();
  const startDate = {
      y: then.getFullYear(),
      m: then.getMonth(),
      d: then.getDay(),
  };
  const today = {
      y: now.getFullYear(),
      m: now.getMonth(),
      d: now.getDay(),
  };
  let months = ((today.y - startDate.y) * 12) + today.m - startDate.m;
  if (today.d < startDate.d && months > 0) months -= 1;
  return months;
};