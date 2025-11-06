import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function EmojiIcon({ emoji, label }: { emoji: string; label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex items-center justify-center text-2xl md:text-3xl bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-sm w-12 h-12 md:w-14 md:h-14"
    >
      {emoji}
    </span>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <EmojiIcon emoji="⚡" label="Lightning Fast" />,
      title: "Lightning Fast Workflows",
      desc: "Automate tasks and boost productivity instantly.",
    },
    {
      icon: <EmojiIcon emoji="🤖" label="AI Powered" />,
      title: "AI Powered Suggestions",
      desc: "Smart recommendations to optimize your flow.",
    },
    {
      icon: <EmojiIcon emoji="🔒" label="Secure" />,
      title: "Enterprise-Grade Security",
      desc: "Your data is encrypted and always protected.",
    },
    {
      icon: <EmojiIcon emoji="📈" label="Analytics" />,
      title: "Real-Time Analytics",
      desc: "Track performance and insights in real time.",
    },
  ];
  return (
    <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
        Supercharge Your Workflow
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 transition hover:shadow-lg hover:-translate-y-1"
          >
            {f.icon}
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white text-center">
              {f.title}
            </h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-center text-sm">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "FlowBoost transformed our team's productivity. The automation features are a game changer!",
      name: "Alex Kim",
      title: "Product Manager, Acme Corp",
      emoji: "🚀",
    },
    {
      quote:
        "The AI suggestions helped us streamline our onboarding process. Highly recommend!",
      name: "Samantha Lee",
      title: "COO, BrightPath",
      emoji: "✨",
    },
    {
      quote:
        "Security and analytics in one place. FlowBoost is now essential to our workflow.",
      name: "Jordan Smith",
      title: "CTO, FinEdge",
      emoji: "🔐",
    },
  ];
  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-xl shadow-md p-8 transition hover:shadow-lg hover:-translate-y-1"
          >
            <span className="text-3xl mb-4">{t.emoji}</span>
            <blockquote className="text-zinc-700 dark:text-zinc-200 italic text-center mb-4">
              “{t.quote}”
            </blockquote>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
              <span className="font-semibold text-zinc-900 dark:text-white">{t.name}</span>
              <br />
              {t.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
