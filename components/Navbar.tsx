'use client';

import { APP_ROUTES } from '@/lib/constants/routes';
import { ConnectKitButton } from 'connectkit';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex min-h-[56px] items-center justify-between bg-blue-600 p-2'>
      <div className='flex gap-4'>
        <Link
          className='font-bold text-white'
          href={APP_ROUTES.TRANSFER_SINGLES}
        >
          Transfer singles
        </Link>
        <Link
          className='font-bold text-white'
          href={APP_ROUTES.TRANSFER_BATCHES}
        >
          Transfer batches
        </Link>
      </div>
      <div>
        <ConnectKitButton />
      </div>
    </div>
  );
};

export default Navbar;
