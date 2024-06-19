import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import Thumbnail from './custom/Thumbnail'
import TextImage from './custom/TextImage'
import TextList from './custom/TextList'
import Button from './custom/button/Button'

import reactBricksUITheme from './react-bricks-ui'
// import BarreRecherche from './custom/BarreRecherche';
import SituationSearch from './custom/SituationSearch'
import Digit from './custom/Digit'
import Accordion from './custom/AccordionFaq'
import HeadingSection from './custom/HeadingSection'
import CardCarousel from './custom/CardCarousel/CardCarousel'
import BlogCarousel from './custom/BlogCarousel/BlogCarousel'
import Contact from './custom/Contact'
import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import Thumbnail from './custom/Thumbnail'
import TextImage from './custom/TextImage'
import TextList from './custom/TextList'
import Button from './custom/button/Button'
import reactBricksUITheme from './react-bricks-ui'
import digit from './custom/digit'
import Accordion from './custom/AccordionFaq'
import HeadingSection from './custom/HeadingSection'
import CardCarousel from './custom/CardCarousel/CardCarousel'
import BlogCarousel from './custom/BlogCarousel/CardCarousel'
import Contact from './custom/Contact'
import TextSlider from './custom/TextSlider/TextSlider'
import SubmitButton from './custom/button/SubmitButton'
import SituationSearch from './custom/SituationSearch'
import InteractiveMap from './react-bricks-ui/contacts/Maps/InteractiveMap'
// import MultiStepForm from './custom/MultiStepForm/pageMultiStep';

const bricks: types.Theme[] = [
  reactBricksUITheme,
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [
          // BUTTONS
          Button,
          SubmitButton,
          // FORMS
          Contact,
          // FEATURES
          SituationSearch,
          HeroUnit,
          Thumbnail,
          InteractiveMap,
          // TextImage,
          TextList,
          Accordion,
          digit,
          CardCarousel,
          BlogCarousel,
          HeadingSection,
          Contact,
          SituationSearch,
          TextSlider,
          // MultiStepForm
        ],
      },
    ],
  },
]

export default bricks
