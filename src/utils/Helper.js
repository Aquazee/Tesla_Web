export const getWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    width,
    height,
  };
};

export const UpperCaseArray = (input) => {
  const result = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
  return result.split(",");
};

export const getURLParams = (key) => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  return params.get(key);
};
