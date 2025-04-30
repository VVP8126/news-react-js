import { INEWS, NewsBanner } from '../../../../entities/news/index.ts';
import withSkeleton from '../../../../shared/hocs/withSkeleton.tsx';
import styles from './styles.module.css';

interface Props {
  banners?: INEWS[] | null;
}

const BannerList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner?.id} newsItem={banner} />;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton<Props>(BannerList, 'banner', 6, 'row');

export default BannerListWithSkeleton;
