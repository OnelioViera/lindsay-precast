import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './components/Navbar'
import { ScrollReveal } from './components/ScrollReveal'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const payload = await getPayload({ config })

  const homePage = await payload.findGlobal({
    slug: 'home-page',
  })

  const { nav, hero, features, about, contact, footer } = homePage

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <Navbar logo={nav?.logo} links={nav?.links} />

      {/* Hero Section */}
      <ScrollReveal animation="fade-up">
        <section className="px-6 py-24 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            {hero?.title}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            {hero?.description}
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href={hero?.primaryButton?.href}
              className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 hover:shadow-md active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-300"
            >
              {hero?.primaryButton?.label}
            </a>
            <a
              href={hero?.secondaryButton?.href}
              className="px-6 py-3 border border-zinc-300 text-zinc-900 rounded-lg hover:bg-zinc-50 hover:shadow-md active:scale-[0.98] dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900 transition-all duration-300"
            >
              {hero?.secondaryButton?.label}
            </a>
          </div>
          {hero?.image && typeof hero.image === 'object' && 'url' in hero.image && (
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={hero.image.url as string}
                alt={(hero.image as { alt?: string }).alt || 'Hero image'}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal animation="fade-up">
        <section id="features" className="px-6 py-24 bg-zinc-50 dark:bg-zinc-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-12">
              {features?.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features?.items?.map((feature: { slug?: string; title: string; description: string; image?: unknown }, index: number) => (
                <Link
                  key={index}
                  href={`/features/${feature.slug}`}
                  className="bg-white dark:bg-zinc-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {feature.image && typeof feature.image === 'object' && 'url' in feature.image ? (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={feature.image.url as string}
                        alt={(feature.image as { alt?: string }).alt || feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center">
                      <span className="text-zinc-400 dark:text-zinc-500 text-4xl font-bold">{index + 1}</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal animation="fade-up">
        <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
              {about?.title}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {about?.description}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal animation="fade-up">
        <section id="contact" className="px-6 py-24 bg-zinc-50 dark:bg-zinc-900">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
              {contact?.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              {contact?.description}
            </p>
            <a
              href={`mailto:${contact?.email}`}
              className="inline-block px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 hover:shadow-md active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-300"
            >
              {contact?.buttonLabel}
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; {footer?.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
