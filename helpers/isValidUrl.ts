export const isValidHttpUrl = (url: string): boolean => {
  let temp;

  try {
    temp = new URL(url);
  } catch (_) {
    return false;
  }

  return temp.protocol === 'http:' || temp.protocol === 'https:';
};
