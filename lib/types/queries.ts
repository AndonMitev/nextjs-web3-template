export type TransferSingleQueryType = {
  id: string;
  operator: string;
  from: string;
  to: string;
  Contract_id: string;
  value: string;
  blockNumber: string;
  blockTimestamp: string;
  transactionHash: string;
};

export type TransferSinglesQueryType = {
  transferSingles: TransferSingleQueryType[];
};
