import { NFTMetadataForm } from '@/components/forms';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <NFTMetadataForm />
    </main>
  );
}
