import { FC } from 'react';
import { PrimaryPageBySlug_primaryPage_blocks_NewsletterRecord } from '../../gql/types/PrimaryPageBySlug';
import { FormBlock } from './FormBlock';

export const Newsletter: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_NewsletterRecord;
}> = ({ block }) => {
  console.log(block);
  return (
    <>
      {' '}
      <FormBlock block={block} />
    </>
  );
};
