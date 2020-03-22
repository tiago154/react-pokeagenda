module.exports = field => (a, b) => {
  if (a[field] > b[field])
    return 1;
  if (a[field] < b[field])
    return -1;
  return 0;
}