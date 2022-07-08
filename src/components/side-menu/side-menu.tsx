import React from 'react';
import { categories } from '../../templateData';
import s from './side-menu.module.scss';

const SideMenu = () => {
  return (
    <div className={s.root}>
      <ul className={s.CategoriesList}>
        {categories.map((category) => (
          <li key={`sidebarCategory${category}`} className={s.CategoryItem}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
