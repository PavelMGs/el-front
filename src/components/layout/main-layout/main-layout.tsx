import React from 'react';
import Header from '../header';
import s from './main-layout.module.scss';

type Props = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout;
