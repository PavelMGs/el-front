import React from 'react';
// import SideMenu from '../../side-menu';
import Header from '../header';
import s from './main-layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <Header />
      <main className={s.Body}>
        {/* <SideMenu /> */}
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
