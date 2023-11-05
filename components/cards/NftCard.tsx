'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { fetchNftMetadata, uriSchema } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NftCardProps {
  ipfsCid: string;
}

interface NftMetadata {
  name: string;
  description: string;
  image: string;
}

export const NftCard = ({ ipfsCid }: NftCardProps) => {
  const [nftMetadata, setNftMetadata] = useState<NftMetadata | null>();

  useEffect(() => {
    (async () => {
      const response = await fetchNftMetadata(ipfsCid);
      setNftMetadata(response);
    })();
  }, []);

  return nftMetadata ? (
    <Card className='flex flex-col items-center'>
      <CardHeader>
        <CardTitle>{nftMetadata.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={uriSchema(nftMetadata.image)}
          alt={nftMetadata.name}
          width={150}
          height={150}
        />
      </CardContent>
      <CardFooter className='flex flex-col'>
        <CardDescription>{nftMetadata.description}</CardDescription>
        <Link href={ipfsCid} target='blank'>
          Link to NFT Metadata
        </Link>
      </CardFooter>
    </Card>
  ) : null;
};
