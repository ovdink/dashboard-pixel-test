import { mainnet, polygon } from '@wagmi/core/chains';
import { createConfig, http } from 'wagmi';
import { metaMask, walletConnect } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
    chains: [mainnet, polygon],
    connectors: [metaMask(), walletConnect({ projectId: 'a7b415283cff5018ae7e341696f093e0' })],
    transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
    },
});
