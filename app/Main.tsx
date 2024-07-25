import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import HeroImg from '@/data/hero-1.svg'
import Image from 'next/image'

const MAX_DISPLAY = 12

export default function Home({ posts }) {
  return (
    <>
      <div className="mb-12 flex flex-col items-center justify-evenly md:flex-row">
        <div className="order-1 md:w-1/2">
          <h2 className="py-4 text-2xl md:text-3xl"> Iris Just Do It.</h2>
          <p>喜歡旅行、挑戰、分享、學習新事物，立志過「just do it」的生活。</p>
        </div>
        <div className=" w-full md:order-1 md:w-1/2">
          <HeroImg className=" fill-gray-800 dark:fill-gray-500" />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Latest Post
          </h1>
        </div>
        <ul className="grid grid-cols-1 gap-4 divide-y divide-gray-200 dark:divide-gray-700 md:grid-cols-3 ">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <li key={slug} className="py-10">
                <article>
                  <div className="space-y-2">
                    {images &&
                      images.map((image, index) => (
                        <div key={index}>
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            <Image
                              alt={title}
                              src={image}
                              width={300}
                              height={400}
                              className="h-full w-full rounded-lg object-cover"
                            />
                          </Link>
                        </div>
                      ))}
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                  <div className="mt-4 text-base font-medium leading-6">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-600 hover:text-primary-600 dark:hover:text-primary-500"
                      aria-label={`Read more: "${title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-600 dark:hover:text-primary-500"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
