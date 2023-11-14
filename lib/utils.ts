import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uriSchema(url: string) {
  if (url.startsWith('ipfs://')) {
    return `https://nftstorage.link/ipfs/${url.slice(7)}`;
  }

  return url;
}

export function formatAddress(value: string) {
  return value.slice(0, 6) + '...' + value.slice(-6);
}
