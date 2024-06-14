import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import Thumbnail from './custom/Thumbnail'
import TextImage from './custom/TextImage'
import TextList from './custom/TextList'
import Button from './custom/button/Button'

import reactBricksUITheme from './react-bricks-ui'
import BarreRecherche from './custom/BarreRecherche'
import digit from './custom/digit'


const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [HeroUnit, Pokemon, Button, Thumbnail, TextImage, TextList, digit], // Custom Bricks
      },
      {
        categoryName: 'Forms',
        bricks: [BarreRecherche],
      },
    ],
  },
]

export default bricks