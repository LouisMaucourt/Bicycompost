import { types, Text, RichText, Link, Image } from 'react-bricks/frontend'

interface ThumbnailProps {
    title: types.TextValue
    description: types.TextValue
    image: types.IImageSource
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ title, description, image }) => {
    return (
        <section className="p-6 text-center">
            <Image
                propName="image"
                source={image}
                alt="Fallback alt tag"
                maxWidth={600}
                imageClassName="mb-6"
            />
            <Text
                propName="multiline"
                value={title}
                renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
            />
            < RichText
                propName='description'
                value={description}
                renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
                placeholder='Écrire une description'
                allowedFeatures={[
                    types.RichTextFeatures.Bold,
                    types.RichTextFeatures.Highlight,
                    types.RichTextFeatures.Link,
                ]}
                renderLink={({ children, href, target, rel }) => (
                    <Link
                        href={href}
                        target={target}
                        rel={rel}
                        className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                        {children}
                    </Link>
                )}
            />

        </section>
    )
}

Thumbnail.schema = {
    name: 'thumbnail',
    label: 'Thumbnail',
    getDefaultProps: () => ({
        title: 'Hello, world!',
        description: 'Lorem ipsum dolor sit amet.',
    }),
}

export default Thumbnail