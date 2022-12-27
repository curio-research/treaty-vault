export const setUnion = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1, ...set2]);
};

export const setIntersection = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1].filter((i) => set2.has(i)));
};

export const setDifference = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1].filter((x) => !set2.has(x)));
};

export function setsAreSame<T>(setA: Set<T>, setB: Set<T>): boolean {
  return setA.size === setB.size && setIntersection(setA, setB).size === setA.size;
}
