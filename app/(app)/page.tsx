import { getPayload } from 'payload'
import config from '@payload-config'

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
      <nav className="sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="text-xl font-bold text-zinc-900 dark:text-white">{nav?.logo}</div>
        <div className="flex gap-6">
          {nav?.links?.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          {hero?.title}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          {hero?.description}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href={hero?.primaryButton?.href}
            className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            {hero?.primaryButton?.label}
          </a>
          <a
            href={hero?.secondaryButton?.href}
            className="px-6 py-3 border border-zinc-300 text-zinc-900 rounded-lg hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900 transition-colors"
          >
            {hero?.secondaryButton?.label}
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-12">
            {features?.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features?.items?.map((feature, index) => (
              <div key={index} className="p-6 bg-white dark:bg-zinc-800 rounded-xl">
                <div className="w-12 h-12 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white dark:text-zinc-900 text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Contact Section */}
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
            className="inline-block px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            {contact?.buttonLabel}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; {footer?.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
