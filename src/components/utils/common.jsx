// debounce function in JavaScript
export const debounce = (func, waitFor) => {
  let timeout = null;

  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced;
};

// throttle function in JavaScript
export const throttle = (func, waitFor) => {
  const now = () => new Date().getTime();
  const resetStartTime = () => (startTime = now());
  let timeout;
  let startTime = now() - waitFor;

  return (...args) => {
    return new Promise((resolve) => {
      const timeLeft = startTime + waitFor - now();
      if (timeout) {
        clearTimeout(timeout);
      }
      if (startTime + waitFor <= now()) {
        resetStartTime();
        resolve(func(...args));
      } else {
        timeout = setTimeout(() => {
          resetStartTime();
          resolve(func(...args));
        }, timeLeft);
      }
    });
  };
};
