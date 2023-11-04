'use client';

import { Output, minLength, object, string } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAddress, useStorage } from '@thirdweb-dev/react';
import { toast } from 'react-toastify';

const NFTMetadataSchema = object({
  name: string([minLength(1, 'Please enter NFT name.')]),
  description: string([minLength(1, 'Please enter NFT description.')])
});

type NFTMetadataDataType = Output<typeof NFTMetadataSchema>;

const NFTMetadataForm = () => {
  const address = useAddress();
  const storage = useStorage();

  const form = useForm<NFTMetadataDataType>({
    resolver: valibotResolver(NFTMetadataSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  });

  const onSubmit = async (values: NFTMetadataDataType) => {
    toast('Data sended to IPFS', { type: 'info' });

    try {
      const cid = await storage?.upload(
        { ...values },
        { rewriteFileNames: { fileStartNumber: 1 } }
      );

      toast('Successfully deployed to IPFS', { type: 'success' });
    } catch (err) {
      toast('Error uploading files to IPFS', { type: 'error' });
    }
  };

  if (!address) {
    return null;
  }

  return (
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default NFTMetadataForm;
