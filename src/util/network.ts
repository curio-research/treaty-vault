export const delay = (ms: number): Promise<void> => new Promise((res) => setTimeout(res, ms));

export const EMPTY_ADDR = '0x0000000000000000000000000000000000000000';
