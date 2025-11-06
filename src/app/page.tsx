import { Button } from "@/components/ui/button";
import { FeaturesSection, TestimonialsSection } from "./FlowBoostSections";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto px-4 md:px-8 pt-16 md:pt-32 pb-12 md:pb-20 flex flex-col items-center text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-xs font-semibold shadow-sm">
          Introducing FlowBoost
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
          Supercharge Your Workflow
        </h1>
        <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl">
          FlowBoost is the all-in-one SaaS platform to automate, optimize, and analyze your team's workflows. Get more done, effortlessly.
        </p>
        <Button
          size="lg"
          className="rounded-xl px-8 py-6 text-lg font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 transition text-white"
        >
          Get Started Free
        </Button>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <footer className="w-full py-8 flex flex-col items-center text-zinc-400 text-sm mt-8">
        <div className="flex gap-4 mb-2">
          <span className="font-bold text-zinc-700 dark:text-zinc-200">FlowBoost</span>
          <span>·</span>
          <a
            href="#"
            className="hover:underline hover:text-blue-600 transition"
          >
            Privacy
          </a>
          <span>·</span>
          <a
            href="#"
            className="hover:underline hover:text-blue-600 transition"
          >
            Terms
          </a>
        </div>
        <div>© {new Date().getFullYear()} FlowBoost. All rights reserved.</div>
      </footer>
    </main>
  );
}
