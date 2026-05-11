export default function Home() {
  const faqs = [
    {
      q: 'How does the AI forecasting work?',
      a: 'We analyze your Shopify sales history, detect seasonal patterns, and use machine learning to predict demand 30-90 days ahead for each SKU.'
    },
    {
      q: 'What Shopify plan do I need?',
      a: 'Any Shopify plan works. You just need API access, which is available on all plans including Basic.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing portal. No contracts, no cancellation fees.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Forecasting
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Prevent Stockouts with<br />
          <span className="text-[#58a6ff]">AI Demand Forecasting</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Shopify store and predict inventory needs 30–90 days ahead. Built for stores with 100+ SKUs that can't afford to guess.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📈', title: '30–90 Day Forecasts', desc: 'Plan reorders weeks before you run out.' },
          { icon: '🔗', title: 'Shopify Native', desc: 'One-click OAuth connection to your store.' },
          { icon: '🌊', title: 'Seasonality Detection', desc: 'Automatically accounts for trends and peaks.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited SKU forecasting',
              '30, 60 & 90-day predictions',
              'Shopify OAuth integration',
              'Seasonality & trend analysis',
              'Email reorder alerts',
              'CSV export'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] mt-20">
        © {new Date().getFullYear()} Shopify Inventory Demand Forecaster. All rights reserved.
      </footer>
    </main>
  )
}
