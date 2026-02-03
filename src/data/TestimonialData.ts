
import { StaticImageData } from 'next/image';

// Divsly images
import divsly_cover from '@/assets/img/portfolio/divsly/cover.png';
import divsly_2 from '@/assets/img/portfolio/divsly/2.png';
import divsly_3 from '@/assets/img/portfolio/divsly/3.png';
import divsly_4 from '@/assets/img/portfolio/divsly/4.png';
import divsly_5 from '@/assets/img/portfolio/divsly/5.png';
import divsly_6 from '@/assets/img/portfolio/divsly/6.png';
import divsly_7 from '@/assets/img/portfolio/divsly/7.png';
import divsly_8 from '@/assets/img/portfolio/divsly/8.png';

// Linco images
import linco_cover from '@/assets/img/portfolio/linco-app/cover.webp';
import linco_2 from '@/assets/img/portfolio/linco-app/linco-2.webp';
import linco_3 from '@/assets/img/portfolio/linco-app/lico-3.webp';
import linco_4 from '@/assets/img/portfolio/linco-app/linco-4.webp';
import linco_5 from '@/assets/img/portfolio/linco-app/linco-5.webp';

interface DataType {
  id: number;
  cover_img: StaticImageData;
  gallery_images: StaticImageData[];
  project_name: string;
  project_url: string;
}

const testimonial_data: DataType[] = [
  {
    id: 1,
    cover_img: divsly_cover,
    gallery_images: [divsly_cover, divsly_2, divsly_3, divsly_4, divsly_5, divsly_6, divsly_7, divsly_8],
    project_name: "Divsly",
    project_url: "https://divsly.com/",
  },
  {
    id: 2,
    cover_img: linco_cover,
    gallery_images: [linco_cover, linco_2, linco_3, linco_4, linco_5],
    project_name: "Linco",
    project_url: "https://play.google.com/store/apps/details?id=com.linco.android",
  },
]
export default testimonial_data