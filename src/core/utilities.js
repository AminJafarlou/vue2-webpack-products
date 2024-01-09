export const convertToCurrency = value => {
  if (!value) return "";

  value = value.replace(/[^\d.-]/g, "");
  const _a = value.split(".");
  let integer = _a[0];
  const decimal = _a[1];

  if (integer) {
    integer = integer
      .split("")
      .reverse()
      .reduce(function(acc, cur, index) {
        if (index % 3 === 0 && index !== 0) {
          acc.push(",");
        }
        acc.push(cur);
        return acc;
      }, [])
      .reverse()
      .join("")
      .replace(/^([-]{0,1}),/, "$1");
  }
  return "".concat(integer).concat(value.includes(".") ? "." + decimal : "");
};
