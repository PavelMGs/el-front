import { useRouter } from 'next/router';
import React from 'react';
import brandsList from '../../templateData/brandsList';
import PreviewCard from '../preview-card';
import s from './category.module.scss';

const Category = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  return (
    <div className={s.root}>
      {typeof categoryId === 'string' &&
        brandsList?.[+categoryId].map((brand) => (
          <PreviewCard
            title={brand.title}
            image={brand.image}
            id={brand.brandId}
            link={`/category/${+categoryId}/brand/${brand.brandId}`}
          />
        ))}
    </div>
  );
};

export default Category;
