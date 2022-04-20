// File names in Camel Case
// Functions that are reusable are stored here

const padZero = (num: int, size: int) => {
  let s = String(num);
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
};

// convert to format: 00:00
export const timeConvert = (num: int) => {
  const minutes = padZero(Math.floor(num / 1000 / 60), 2);
  const seconds = padZero(num % 60, 2);
  return `${minutes}:${seconds}`;
};

export const secondToTime = (num: int) => {
  const minutes = padZero(Math.floor(num / 60), 2);
  const seconds = padZero(num % 60, 2);
  return `${minutes}:${seconds}`;
};
