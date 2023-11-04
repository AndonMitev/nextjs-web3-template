import { ReactNode } from 'react';
import ThirdWebProvider from './ThirdWebProvider';
import ToastProvider from './ToastProvider';

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThirdWebProvider>
      {children}
      <ToastProvider />
    </ThirdWebProvider>
  );
}

export default Providers;
