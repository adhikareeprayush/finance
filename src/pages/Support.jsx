const faq = [
  {
    q: "Is LedgerLens connected to a live broker?",
    a: "No. Quotes, earnings, and news are static fixtures for UI demonstration.",
  },
  {
    q: "Where is my password stored?",
    a: "Sign-in is simulated — credentials are not sent anywhere; only a mock token is saved in your browser.",
  },
  {
    q: "How do I add real data?",
    a: "Replace imports from src/mock/fixtures.js with fetch calls to your API and adjust components to match your schemas.",
  },
];

const Support = () => (
  <div className="max-w-4xl mx-auto flex flex-col gap-10 pb-8">
    <div className="relative rounded-2xl overflow-hidden h-48">
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/30 flex flex-col justify-center px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Help & support</h1>
        <p className="text-white/90 mt-2 max-w-xl">
          Answers for the demo workspace — for production, plug in your ticketing system here.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      {[
        {
          title: "Email",
          detail: "support@ledgerlens.demo",
          image:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Docs",
          detail: "See README in the repo",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Status",
          detail: "Mock — always operational",
          image:
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80",
        },
      ].map((card) => (
        <div
          key={card.title}
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900"
        >
          <div className="h-28 relative">
            <img
              src={card.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="font-semibold dark:text-neutral-100">{card.title}</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{card.detail}</p>
          </div>
        </div>
      ))}
    </div>

    <div>
      <h2 className="text-xl font-bold mb-4 dark:text-neutral-100">FAQ</h2>
      <ul className="flex flex-col gap-3">
        {faq.map((item) => (
          <li
            key={item.q}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50 dark:bg-neutral-900/80"
          >
            <p className="font-semibold dark:text-neutral-100">{item.q}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              {item.a}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Support;
