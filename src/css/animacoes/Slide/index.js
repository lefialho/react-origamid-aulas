import { Slide } from './Slide';

const slides = [
  {
    id: 'slide1',
    text: 'Slide 1',
  },
  {
    id: 'slide2',
    text: 'Slide 2',
  },
  {
    id: 'slide3',
    text: 'Slide 3',
  },
];

export function SlideAnimation() {
  return <Slide slides={slides} />;
}
