import { uriSchema } from '.';

export const fetchNftMetadata = async (cid: string) => {
  const response = await fetch(uriSchema(cid));

  if (!response.ok) {
    throw Error('Failed to fetch nft metadata');
  }

  return await response.json();
};
