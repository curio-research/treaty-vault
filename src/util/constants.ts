export const chainInfo: Record<string, chainInfoType> = {
  none: {
    rpcUrl: '',
    wsRpcUrl: '',
    id: 0,
  },
  tailscale: {
    rpcUrl: 'http://100.117.164.103:8545',
    wsRpcUrl: 'ws://100.117.164.103:8545',
    id: 0,
  },
  localhost: {
    rpcUrl: 'http://127.0.0.1:8545/',
    wsRpcUrl: 'ws://localhost:8545',
    id: 31337,
  },
  gnosisOptimism: {
    rpcUrl: 'https://optimism.gnosischain.com/',
    wsRpcUrl: 'wss://optimism.gnosischain.com/wss',
    id: 0,
  },
  constellation: {
    rpcUrl: 'http://curio.constellationchain.xyz:8545',
    wsRpcUrl: 'ws://curio.constellationchain.xyz:8546',
    id: 0,
  },
  constellationNew: {
    rpcUrl: 'http://52.24.63.91:8545/',
    wsRpcUrl: 'ws://52.24.63.91:8546/',
    id: 0,
  },
  exfac: {
    rpcUrl: 'https://rpc-curio-hello-wa0nsj4gsn.t.exfac.xyz',
    wsRpcUrl: 'wss://rpc-curio-hello-wa0nsj4gsn.t.exfac.xyz',
    id: 0,
  },
  altlayer: {
    rpcUrl: 'https://arches1-alt-producer-archive-rpc.alt.technology',
    wsRpcUrl: 'wss://arches1-alt-producer-archive-api.alt.technology',
    id: 9991,
  },
};

export interface chainInfoType {
  rpcUrl: string;
  wsRpcUrl: string;
  id: number;
}
