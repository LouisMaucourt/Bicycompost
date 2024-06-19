import classNames from 'classnames'
import React from 'react'
import { Text } from 'react-bricks/frontend'
import { textColors } from '../../colors'

interface TitleSubtitleProps {
  bigCentered?: boolean
  extraboldTitle?: boolean
  className?: string
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  bigCentered = false,
  extraboldTitle = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (
          <h2
            className={classNames(
              extraboldTitle ? 'font-extrabold' : 'font-bold',
            )}
          >
            {children}
          </h2>
        )}
      />
      <Text
        propName="subtitle"
        placeholder="Subtitle..."
        renderBlock={({ children }) => (
          <h5 style={{ fontWeight: "500" }}
          >
            {children}
          </h5>
        )}
      />
    </div>
  )
}

export default TitleSubtitle
