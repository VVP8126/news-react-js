import React from 'react';
import styles from './styles.module.css';
import NewsBanner from '../NewsBanner/NewsBanner';
import withSkeleton from '../../hocs/withSkeleton';

const BannerList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner?.id} newsItem={banner} />;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton(BannerList, 'banner', 6, 'row');

export default BannerListWithSkeleton;
