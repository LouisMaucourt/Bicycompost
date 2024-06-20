import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import Thumbnail from './custom/Thumbnail'
import TextImage from './custom/TextImage'
import TextList from './custom/TextList'
import TextListVariation from './custom/TextListVariation';
import Button from './custom/button/Button'
import reactBricksUITheme from './react-bricks-ui'
import digit from './custom/Digit'
import Accordion from './custom/AccordionFaq'
import HeadingSection from './custom/HeadingSection'
import CardCarousel from './custom/CardCarousel/CardCarousel'
import BlogCarousel from './custom/BlogCarousel/CardCarousel'
import Contact from './custom/Contact'
import TextSlider from './custom/TextSlider/TextSlider'
import SubmitButton from './custom/button/SubmitButton'
import SituationSearch from './custom/SituationSearch'
import InteractiveMap from './react-bricks-ui/contacts/Maps/InteractiveMap'
import EngagementPoints from './custom/EngagementPoints';
import CardVehicule from './custom/CardVehicule';

import MultiStepForm from './custom/MultiStepForm/PageMultiStep';
import CardInclusion from './custom/CardInclusion';
import PrestationPage from './custom/Prestation/PrestationPage';

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
          TextImage,
          TextList,
          Accordion,
          digit,
          CardCarousel,
          BlogCarousel,
          HeadingSection,
          Contact,
          SituationSearch,
          TextSlider,
          EngagementPoints,
          TextListVariation,
          CardVehicule,
          CardInclusion,
          MultiStepForm,
          PrestationPage
        ],
      },
    ],
  },
]

export default bricks
