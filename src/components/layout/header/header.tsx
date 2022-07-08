import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../../assets/images/Logo.webp';
import Cart from '../../../assets/icons/Cart';
import s from './header.module.scss';
import RegAndLoginModal from '../../modals/reg-and-login/reg-and-login';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleCloseModal = () => setIsLoginOpen(false);
  return (
    <div className={s.root}>
      <RegAndLoginModal onClose={handleCloseModal} isOpen={isLoginOpen} />
      <span className={s.Logo}>
        <Image src={Logo} alt="" />
      </span>
      <address className={s.Address}>
        <a href="https://g.page/Eleteh?share">
          <b>Наша адресса:</b>
          <br />
          ст.м. Голосіївська, пр. Задорожний 3 корп. 2, Київ, Україна
        </a>
      </address>
      <span className={s.Phones}>
        Зв&apos;язатись з нами:
        <a href="tel:+380934737142">+38(093)-473-71-42</a>
        <a href="tel:+380934737142">+38(093)-473-71-42</a>
      </span>
      <span className={s.Cart}>
        <Cart />
      </span>
      <span>
        <button type="button" onClick={() => setIsLoginOpen((prev) => !prev)}>
          Login
        </button>
      </span>
    </div>
  );
};

export default Header;
