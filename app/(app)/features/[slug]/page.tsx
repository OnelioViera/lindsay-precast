import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const homePage = await payload.findGlobal({
    slug: 'home-page',
  })

  const feature = homePage.features?.items?.find((item: { slug?: string }) => item.slug === slug)

  if (!feature) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
            {homePage.nav?.logo}
          </Link>
          <div className="flex gap-6">
            {homePage.nav?.links?.map((link: { href: string; label: string }, index: number) => (
              <a
                key={index}
                href={link.href}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {feature.image && typeof feature.image === 'object' && 'url' in feature.image && (
        <div className="relative w-full h-[50vh] min-h-[400px]">
          <Image
            src={feature.image.url as string}
            alt={(feature.image as { alt?: string }).alt || feature.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
            <Link
              href="/#features"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Features
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {feature.title}
            </h1>
          </div>
        </div>
      )}

      <main className="px-6 py-16 max-w-4xl mx-auto">
        {!(feature.image && typeof feature.image === 'object' && 'url' in feature.image) && (
          <>
            <Link
              href="/#features"
              className="inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white mb-8 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Features
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">
              {feature.title}
            </h1>
          </>
        )}

        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 mb-12">
          <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {feature.description}
          </p>
        </div>

        {feature.content && (
          <article className="prose prose-lg dark:prose-invert prose-zinc max-w-none prose-headings:font-bold prose-a:text-zinc-900 dark:prose-a:text-white prose-img:rounded-xl">
            <RichText data={feature.content} />
          </article>
        )}
      </main>

      <footer className="px-6 py-12 border-t border-zinc-200 dark:border-zinc-800 mt-16">
        <div className="max-w-6xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; {homePage.footer?.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
