import { getQlClient, queryTransferBatches } from '@/lib/graphql';

const TransferBatches = async () => {
  const { data } = await getQlClient().query({
    query: queryTransferBatches,
  });

  return <div>TransferBatches</div>;
};

export default TransferBatches;
