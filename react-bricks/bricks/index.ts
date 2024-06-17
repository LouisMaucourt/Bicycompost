import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import TextList from './custom/TextList'
import Button from './custom/button/Button'
import reactBricksUITheme from './react-bricks-ui'
import digit from './custom/digit'
import SituationSearch from './custom/SituationSearch'
import SubmitButton from './custom/button/SubmitButton'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks', // Custom Bricks
        bricks: [
          // BUTTONS
          Button,
          SubmitButton,
          // OTHER
          HeroUnit,
          Pokemon,
          TextList,
          digit,
          SituationSearch,
        ],
      },
    ],
  },
]

export default bricks
