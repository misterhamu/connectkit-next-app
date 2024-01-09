"use client"
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";

type Props = {
  children: React.ReactNode;
};

const config = createConfig(
    getDefaultConfig({
      appName: 'ConnectKit Next.js demo',
      //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
      //alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID,
      chains: [mainnet, polygon, optimism, arbitrum],
      alchemyId: process.env.NEXT_PUBLIC_ALCHEMYID,
      walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    })
  );

export default function Providers({ children }: Props) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
}
