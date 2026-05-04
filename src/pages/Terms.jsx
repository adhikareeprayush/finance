const Terms = () => (
  <div className="max-w-3xl mx-auto pb-12">
    <div className="relative rounded-2xl overflow-hidden h-44 mb-10">
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55 flex items-center px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Terms of use</h1>
      </div>
    </div>

    <div className="max-w-none text-sm leading-relaxed space-y-4 dark:text-neutral-300">
      <p className="text-neutral-600 dark:text-neutral-400">
        LedgerLens is provided as a demonstration front-end. By using this demo you acknowledge
        that market data, filings, and news shown here are synthetic or illustrative and must not
        be used for actual investment decisions.
      </p>
      <p>
        <strong className="text-neutral-900 dark:text-neutral-100">No warranties.</strong> The app
        is offered “as is” without warranties of any kind. The author and contributors are not
        liable for losses arising from use or misuse of the software.
      </p>
      <p>
        <strong className="text-neutral-900 dark:text-neutral-100">Privacy.</strong> This build does
        not send credentials to a server; session data may be stored in your browser&apos;s{" "}
        <code className="text-xs bg-neutral-200 dark:bg-neutral-800 px-1 rounded">localStorage</code>.
      </p>
      <p>
        <strong className="text-neutral-900 dark:text-neutral-100">Changes.</strong> These terms
        may be updated as the project evolves; check the repository README for the latest intent.
      </p>
      <p className="text-xs text-neutral-500 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        LedgerLens · Author: Prayush Adhikari (@adhikareeprayush)
      </p>
    </div>
  </div>
);

export default Terms;
