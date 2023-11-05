import { NFTStorage } from 'nft.storage';
import { TokenInput } from 'nft.storage/src/token.js';

const nftStorage = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY as string,
});

export const nftStore = async (metadata: TokenInput) => {
  return await nftStorage.store(metadata);
};
