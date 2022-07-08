import { StaticImageData } from 'next/image';
import Breaker from '../assets/templateImages/breaker.webp';

type BrandItem = {
  title: string;
  brandId: string;
  image: StaticImageData;
};

const brandsList: Record<number, BrandItem[]> = {
  1: [
    {
      title: 'Hager',
      brandId: 'hagerId',
      image: Breaker,
    },
    { title: 'Schneider', brandId: 'schneiderId', image: Breaker },
  ],
};

export default brandsList;
