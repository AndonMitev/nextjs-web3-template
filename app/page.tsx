import ConnectWallet from '@/components/ConnectWallet';
import NFTMetadataForm from '@/components/NFTMetadataForm';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ConnectWallet />
      <NFTMetadataForm />
    </main>
  );
}