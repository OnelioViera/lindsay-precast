import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Navbar } from '../../components/Navbar'
import { ScrollReveal } from '../../components/ScrollReveal'

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
      <Navbar logo={homePage.nav?.logo} links={homePage.nav?.links} transparent />

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
          <ScrollReveal animation="fade-up">
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
          </ScrollReveal>
        )}

        <ScrollReveal animation="fade-up">
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 mb-12">
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </ScrollReveal>

        {feature.content && (
          <ScrollReveal animation="fade-up" delay="0.1s">
            <article className="prose prose-lg dark:prose-invert prose-zinc max-w-none prose-headings:font-bold prose-a:text-zinc-900 dark:prose-a:text-white prose-img:rounded-xl">
              <RichText data={feature.content} />
            </article>
          </ScrollReveal>
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
