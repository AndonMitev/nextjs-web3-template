'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { nftStore } from '@/lib';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Output, blob, minLength, object, string } from 'valibot';
import { useAccount } from 'wagmi';
import { NftCard } from '../cards';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const NFTMetadataSchema = object({
  name: string([minLength(1, 'Please enter NFT name.')]),
  description: string([minLength(1, 'Please enter NFT description.')]),
  backgroundColor: string([minLength(1, 'Please select color')]),
  weapon: string([minLength(1, 'Please select weapon')]),
  image: blob([]),
});

type NFTMetadataDataType = Output<typeof NFTMetadataSchema>;

export const NFTMetadataForm = () => {
  const address = useAccount();
  const [ipfsCid, setIpfsCid] = useState('');
  const form = useForm<NFTMetadataDataType>({
    resolver: valibotResolver(NFTMetadataSchema),
    defaultValues: {
      name: '',
      description: '',
      image: undefined,
      backgroundColor: '',
      weapon: '',
    },
  });

  const onSubmit = async (values: NFTMetadataDataType) => {
    toast('Data sended to IPFS', { type: 'info' });

    try {
      const metadata = await nftStore({
        name: values.name,
        description: values.description,
        image: values.image,
        properties: [
          {
            trait_type: 'backgroundColor',
            value: values.backgroundColor,
          },
          {
            trait_type: 'weapon',
            value: values.weapon,
          },
        ],
      });

      setIpfsCid(metadata.url);

      toast('Successfully deployed to IPFS', { type: 'success' });
    } catch (err) {
      console.log('err', err);
      toast('Error uploading files to IPFS', { type: 'error' });
    }
  };

  if (!address) {
    return null;
  }

  return (
    <div>
      {ipfsCid ? <NftCard ipfsCid={ipfsCid} /> : null}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    accept='.jpg, .jpeg, .png, .svg, .gif, .webp'
                    type='file'
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='backgroundColor'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select background color' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='blue'>Blue</SelectItem>
                    <SelectItem value='red'>Red</SelectItem>
                    <SelectItem value='green'>Green</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='weapon'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weapon</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select weapon' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='spear'>Spear</SelectItem>
                    <SelectItem value='sword'>Sword</SelectItem>
                    <SelectItem value='staff'>Staff</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};
