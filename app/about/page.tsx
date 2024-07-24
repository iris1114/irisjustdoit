import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const authors = allAuthors.map((author) => ({
    ...coreContent(author),
    bodyCode: author.body.code,
  }))

  return (
    <>
      <AuthorLayout authors={authors} />
    </>
  )
}
