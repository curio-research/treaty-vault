// --------------------
// ⛓️ chain registry ⛓️
// --------------------

export interface ChainInfoType {
  rpcUrl: string;
  wsRpcUrl: string;
  id: number;
  gasLimit: number;
}

export const chainInfo: Record<string, ChainInfoType> = {
  localhost: {
    rpcUrl: 'http://127.0.0.1:8545/',
    wsRpcUrl: 'ws://localhost:8545',
    id: 31337,
    gasLimit: 3_000_000_000,
  },
  constellation: {
    rpcUrl: 'https://curiov3.constellationchain.xyz/http',
    wsRpcUrl: 'wss://curiov3.constellationchain.xyz/ws',
    id: 0,
    gasLimit: 1_000_000_000,
  },
  constellationFast: {
    rpcUrl: 'https://curio-test.constellationchain.xyz/http',
    wsRpcUrl: 'wss://curios-test.constellationchain.xyz/ws',
    id: 0,
    gasLimit: 1_000_000_000,
  },
  exfac: {
    rpcUrl: 'https://rpc-bruh-9oxovp18ub.t.exfac.xyz',
    wsRpcUrl: 'wss://rpc-bruh-9oxovp18ub.t.exfac.xyz',
    id: 0,
    gasLimit: 1_000_000_000,
  },
  altlayer: {
    rpcUrl: 'https://arches3-alt-producer-archive-rpc.alt.technology',
    wsRpcUrl: 'wss://arches3-alt-producer-archive-api.alt.technology',
    id: 0,
    gasLimit: 1_500_000_000,
  },
  // default case
  none: {
    rpcUrl: '',
    wsRpcUrl: '',
    id: 0,
    gasLimit: 0,
  },
};
