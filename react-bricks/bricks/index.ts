import { types } from 'react-bricks/frontend';

import HeroUnit from './custom/MyHeroUnit';
import Pokemon from './custom/Pokemon';
import Thumbnail from './custom/Thumbnail';
import TextImage from './custom/TextImage';
import TextList from './custom/TextList';
import Button from './custom/button/Button';

import reactBricksUITheme from './react-bricks-ui';
// import BarreRecherche from './custom/BarreRecherche';
import SituationSearch from './custom/SituationSearch';
import Digit from './custom/Digit';
import Accordion from './custom/AccordionFaq';
import HeadingSection from './custom/HeadingSection';
import CardCarousel from './custom/CardCarousel/CardCarousel';
import BlogCarousel from './custom/BlogCarousel/BlogCarousel';
import Contact from './custom/Contact';
// import MultiStepForm from './custom/MultiStepForm/pageMultiStep';


const bricks: types.Theme[] = [
  reactBricksUITheme,
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [
          HeroUnit,
          Pokemon,
          Button,
          Thumbnail,
          TextImage,
          TextList,
          Accordion,
          Digit,
          CardCarousel,
          BlogCarousel,
          HeadingSection,
          Contact,
          SituationSearch,
          // MultiStepForm
        ],
      },
    ],
  },
];

export default bricks;
