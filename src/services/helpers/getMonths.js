module.exports = (start, end = new Date()) => {
  const then = new Date(start);
  const now = new Date(end);
  const startDate = {
      y: then.getFullYear(),
      m: then.getMonth(),
      d: then.getDate(),
  };
  const today = {
      y: now.getFullYear(),
      m: now.getMonth(),
      d: now.getDate(),
  };
  let months = ((today.y - startDate.y) * 12) + today.m - startDate.m;
  if (today.d < startDate.d && months > 0) months -= 1;
  return months;
};
