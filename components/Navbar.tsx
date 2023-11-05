'use client';

import { ConnectKitButton } from 'connectkit';

const Navbar = () => {
  return (
    <div className='flex min-h-[56px] flex-row-reverse bg-blue-600 p-2'>
      <ConnectKitButton />
    </div>
  );
};

export default Navbar;
