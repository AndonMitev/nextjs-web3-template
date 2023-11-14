import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Transfers from './transfers';

const TransferBatches = async () => {
  return (
    <div className='flex flex-col items-center gap-4 p-4'>
      <Label className='text-2xl'>Latest 10 transfers</Label>
      <Suspense fallback={<CardLoadingSkeleton />}>
        <Transfers />
      </Suspense>
    </div>
  );
};

function CardLoadingSkeleton() {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className='m-4 flex h-[200px] w-[240px] flex-col items-center gap-4 rounded-lg border border-gray-100 p-2'
          >
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
          </div>
        ))}
      ;
    </div>
  );
}

export default TransferBatches;
