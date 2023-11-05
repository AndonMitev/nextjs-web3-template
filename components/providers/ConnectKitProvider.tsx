'use client';

import {
  ConnectKitProvider as NextConnectKitProvider,
  getDefaultConfig,
} from 'connectkit';
import { ReactNode } from 'react';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';

const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    chains: [mainnet, polygon],
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID as string,
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,

    appName: 'Your App Name',
  })
);

const ConnectKitProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiConfig config={config}>
      <NextConnectKitProvider>{children}</NextConnectKitProvider>
    </WagmiConfig>
  );
};

export default ConnectKitProvider;
