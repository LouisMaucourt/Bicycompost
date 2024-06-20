import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import Thumbnail from './custom/Thumbnail'
import TextImage from './custom/TextImage'
import TextList from './custom/TextList'
import TextListVariation from './custom/TextListVariation'
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
import TextImageLeft from './custom/TextImageLeft'
import TextListGrid from './custom/TextListGrid'
import EngagementPoints from './custom/EngagementPoints'
import CardVehicule from './custom/CardVehicule'
import MultiStepForm from './custom/MultiStepForm/PageMultiStep'
import CardInclusion from './custom/CardInclusion'
import PrestationPage from './custom/Prestation/PrestationPage'
import furniturePage from './custom/Furniture/PrestationPage';

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
          // TEXT + IMAGE
          TextImage,
          TextImageLeft,
          TextListGrid,
          // CAROUSELS,
          CardCarousel,
          BlogCarousel,
          // CAROUSELS
          CardCarousel,
          BlogCarousel,
          // FEATURES
          SituationSearch,
          InteractiveMap,
          HeroUnit,
          Thumbnail,
          TextList,
          Accordion,
          digit,
          HeadingSection,
          Contact,
          TextSlider,
          EngagementPoints,
          TextListVariation,
          CardVehicule,
          CardInclusion,
          MultiStepForm,
          PrestationPage,
          furniturePage,
        ],
      },
    ],
  },
]

export default bricks
