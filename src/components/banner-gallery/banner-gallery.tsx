import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SaltLighters from '../../assets/templateImages/SaltLighters.webp';
import Kanlux from '../../assets/templateImages/Kanlux.webp';
import Wago from '../../assets/templateImages/Wago.webp';
import Cable from '../../assets/templateImages/Cable.webp';
import Boxes from '../../assets/templateImages/Boxes.webp';

import s from './banner-gallery.module.scss';

const data = [
  {
    src: SaltLighters,
  },
  {
    src: Kanlux,
  },
  {
    src: Wago,
  },
  {
    src: Cable,
  },
  {
    src: Boxes,
  },
];

const BannerGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef: { current: ReturnType<typeof setTimeout> | null } =
    useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0)),
      5000,
    );
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className={s.root}>
      <div
        className={s.ImagesContainer}
        style={{ transform: `translateX(-${currentIndex * 1180}px)` }}
      >
        {data.map((el) => (
          <div className={s.Image}>
            <Image
              src={el.src}
              className={s.Image}
              key={`${el.src}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <ul className={s.ControlList}>
        {data.map((_, index) => (
          <li key={`${_}button`} className={s.ControlItem}>
            <button
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={s.ControlButton}
            >
              {' '}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BannerGallery;
