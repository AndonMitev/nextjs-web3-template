import { gql } from '@apollo/client';

export const queryApprovalForAlls = gql`
  query {
    approvalForAlls(orderBy: blockTimestamp, orderDirection: desc, first: 10) {
      transactionHash
      operator
      id
      blockTimestamp
      blockNumber
      approved
      account
    }
  }
`;

export const queryTransferSingles = gql`
  query {
    transferSingles(orderBy: blockTimestamp, orderDirection: desc, first: 10) {
      value
      transactionHash
      to
      operator
      id
      from
      blockTimestamp
      blockNumber
      Contract_id
    }
  }
`;

export const queryTransferBatches = gql`
  query {
    transferBatches(orderBy: blockTimestamp, orderDirection: desc, first: 10) {
      id
      operator
      from
      to
      values
      transactionHash
      ids
      blockTimestamp
      blockNumber
    }
  }
`;
