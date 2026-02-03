export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="text-xl font-bold text-zinc-900 dark:text-white">Logo</div>
        <div className="flex gap-6">
          <a href="#features" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Features</a>
          <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">About</a>
          <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          Build Something Amazing
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          A simple, modern landing page built with Next.js and Tailwind CSS.
          Start building your next project today.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-6 py-3 border border-zinc-300 text-zinc-900 rounded-lg hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl">
              <div className="w-12 h-12 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-white dark:text-zinc-900 text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Fast Performance</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Built with Next.js for optimal loading speeds and SEO.</p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl">
              <div className="w-12 h-12 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-white dark:text-zinc-900 text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Modern Design</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Clean and responsive design with Tailwind CSS.</p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl">
              <div className="w-12 h-12 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-white dark:text-zinc-900 text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Easy to Customize</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Simple structure that's easy to modify and extend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">About Us</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            We create modern web experiences that help businesses grow.
            Our focus is on performance, accessibility, and user experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Get in Touch</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Ready to start your project? Contact us today.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2026 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
