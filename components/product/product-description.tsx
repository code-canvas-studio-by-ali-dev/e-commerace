'use client'

import Prose from 'components/prose';
import { Product } from 'lib/wix/types';
import { VariantSelector } from './variant-selector';
import { Button } from '@headlessui/react';
import { PhoneIcon } from '@heroicons/react/24/outline';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-4 text-4xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Button className={"flex items-center gap-2 text-xs md:text-sm px-3"}>
            <PhoneIcon className='size-5' />
            Get mote info
          </Button>
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
    </>
  );
}
