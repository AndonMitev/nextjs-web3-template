'use client';

import { ReactNode } from 'react';
import { Ethereum, Polygon } from '@thirdweb-dev/chains';
import { ThirdwebProvider as NextThirdWebProvider } from '@thirdweb-dev/react';

function ThirdWebProvider({ children }: { children: ReactNode }) {
  return (
    <NextThirdWebProvider
      autoSwitch
      activeChain={Ethereum}
      supportedChains={[Ethereum, Polygon]}
      clientId={process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID}
    >
      {children}
    </NextThirdWebProvider>
  );
}

export default ThirdWebProvider;
