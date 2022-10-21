export const setUnion = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1, ...set2]);
};

export const setIntersection = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1].filter((i) => set2.has(i)));
};

export const setDiff = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1].filter((x) => !set2.has(x)));
};

// encode world constants

export const encodeConstantTag = (
  functionName: string,
  componentName: string,
  entityName: string,
  level: number
): string => {
  return `Constant-${functionName}-${componentName}-${entityName}-${level}`;
};
