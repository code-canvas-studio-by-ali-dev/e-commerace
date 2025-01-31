import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts, getCollections } from 'lib/wix';
import type { Product, Collection } from 'lib/wix/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Collection;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/search/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.image}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  const  homepageCategory: Collection[] = (await getCollections()).filter(data => data.title === 'Women' || data.title === 'Men' || data.title === 'Kids')

  console.log(homepageCategory)

  const [firstCategory, secondCategory, thirdCategory] = homepageCategory;

  return (
      <section className="grid mx-auto md:hidden  max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        <ThreeItemGridItem size="full" item={firstCategory as Collection} priority={true} />
        <ThreeItemGridItem size="half" item={secondCategory as Collection} priority={true} />
        <ThreeItemGridItem size="half" item={thirdCategory as Collection} />
      </section>
  );
}
