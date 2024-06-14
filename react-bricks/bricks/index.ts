import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import reactBricksUITheme from './react-bricks-ui'
import BarreRecherche from './custom/BarreRecherche'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon], // External data Bricks
      },
      {
        categoryName: 'Forms',
        bricks: [BarreRecherche],
      },
    ],
  },
]

export default bricks
