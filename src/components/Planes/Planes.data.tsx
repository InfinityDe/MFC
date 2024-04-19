import slide_image_1 from '../../../public/assets/card4.png';
import slide_image_2 from '../../../public/assets/card2.png';
import slide_image_3 from '../../../public/assets/card3.png';
import slide_image_4 from '../../../public/assets/card5.png';

export interface PlanData {
  id: number;
  image: string;
}

const planesData: PlanData[] = [
  {
    id: 1,
    image: slide_image_1.src
  },
  {
    id: 2,
    image: slide_image_2.src,

  },
  {
    id: 3,
    image: slide_image_3.src,

  },
  {
    id: 4,
    image: slide_image_4.src,
  },
];

export default planesData;
