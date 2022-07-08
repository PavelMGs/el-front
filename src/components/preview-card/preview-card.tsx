import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import s from './preview-card.module.scss';

type Props = {
  title: string;
  image: StaticImageData;
  id: string | number;
  link: string;
};

const PreviewCard: React.FC<Props> = ({ title, image, id, link }) => {
  return (
    <Link href={link} as={link}>
      <div className={s.root}>
        <div className={s.title}>{title}</div>
        <div className={s.ImagesContainer}>
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
      </div>
    </Link>
  );
};

export default PreviewCard;
