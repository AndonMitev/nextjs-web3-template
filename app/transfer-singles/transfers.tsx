import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { formatAddress } from '@/lib';
import { getQlClient, queryTransferSingles } from '@/lib/graphql';
import { TransferSinglesQueryType } from '@/lib/types';
import { Label } from '../../components/ui/label';

export default async function Transfers() {
  const { data } = await getQlClient().query<TransferSinglesQueryType>({
    query: queryTransferSingles,
  });

  return (
    <div className='flex flex-wrap justify-center'>
      {data.transferSingles.map((e) => (
        <Card
          key={e.transactionHash}
          className='m-4 flex w-1/6 flex-col items-center p-2'
        >
          <CardContent className='flex flex-col gap-4'>
            <Label>Tx Hash: {formatAddress(e.transactionHash)}</Label>
            <Label>From: {formatAddress(e.from)}</Label>
            <Label>To: {formatAddress(e.to)}</Label>
            <Label>TokenId: {e.Contract_id}</Label>
            <Label>Block: {e.blockNumber}</Label>
          </CardContent>
          <CardFooter className='flex flex-col'>
            <CardDescription>At {e.blockTimestamp}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
