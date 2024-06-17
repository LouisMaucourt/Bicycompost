import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import TextList from './custom/TextList'
import Button from './custom/button/Button'
import reactBricksUITheme from './react-bricks-ui'
import digit from './custom/digit'
import SituationSearch from './custom/SituationSearch'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [HeroUnit, Pokemon, Button, TextList, digit, SituationSearch], // Custom Bricks
      },
    ],
  },
]

export default bricks
