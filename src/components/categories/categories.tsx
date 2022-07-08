import React from 'react';
import { categoriesList } from '../../templateData';
import PreviewCard from '../preview-card';
import s from './categories.module.scss';

const Categories = () => {
  return (
    <div className={s.root}>
      {categoriesList.map((category) => (
        <PreviewCard
          key={category.id}
          title={category.title}
          image={category.image}
          id={category.id}
          link={`/category/${category.id}`}
        />
      ))}
    </div>
  );
};

export default Categories;
