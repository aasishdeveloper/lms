
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />

      {/* <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-[-120px] h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.35),rgba(15,118,110,0))] blur-2xl" />
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                New cohort builder is live
              </div>
              <h1 className="font-display text-4xl leading-tight md:text-5xl">
                Modern learning ops for teams that ship faster.
              </h1>
              <p className="text-base text-slate-600 md:text-lg">
                KnowledgePulse unifies courses, cohorts, and coaching into a
                single system. Keep learners motivated with smart cadence,
                rich content, and instant insight.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800">
                  Build a learning path
                </button>
                <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
                  Watch the demo
                </button>
              </div>
              <div className="grid gap-4 pt-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm"
                  >
                    <div className="text-2xl font-semibold">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wide text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 top-8 hidden h-40 w-40 rounded-3xl bg-emerald-100 md:block" />
              <div className="relative rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500">
                      Live cohort
                    </div>
                    <div className="text-lg font-semibold">
                      Product Design Sprint
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Week 3
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-800">
                      Session agenda
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      Critique lab, async prep, and peer feedback loops.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-800">
                      Engagement score
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                      84% of learners are on track this week.
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    2 mentors online
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    Next sync: Fri 10:00
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 left-10 hidden rounded-2xl border border-slate-200 bg-white/90 p-4 text-xs text-slate-600 shadow-lg md:block">
                Adaptive check-ins boosted completion by 17%.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Why teams switch
              </div>
              <h2 className="font-display text-3xl">
                One platform for content, community, and outcomes.
              </h2>
              <p className="text-slate-600">
                Replace scattered tools with a focused learning stack that
                feels premium for mentors and effortless for learners.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-sm font-semibold">{feature.title}</div>
                  <p className="mt-3 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-900 px-6 py-8 text-white">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-300">
                Cohort spotlight
              </div>
              <h3 className="font-display text-2xl">
                Build a learning journey that feels human.
              </h3>
            </div>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900">
              Explore playbooks
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="flex items-center justify-between gap-4 pb-6">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Signature tracks
              </div>
              <h2 className="font-display text-3xl">
                Curated learning paths ready to launch.
              </h2>
            </div>
            <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 md:inline-flex">
              View library
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tracks.map((track) => (
              <div
                key={track.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-xs uppercase tracking-wide text-emerald-600">
                  {track.tag}
                </div>
                <div className="mt-3 text-lg font-semibold">{track.name}</div>
                <div className="mt-2 text-sm text-slate-600">
                  {track.detail}
                </div>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
                  Preview cohort
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Learning intelligence
              </div>
              <h2 className="font-display text-3xl">
                Coaching signals that drive real progress.
              </h2>
              <p className="text-slate-600">
                Combine cohort rhythm, learner sentiment, and mentor feedback to
                prioritize outreach at the right moment.
              </p>
              <button className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500">
                See analytics
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Engagement pulse
                </div>
                <div className="mt-3 text-2xl font-semibold">+24%</div>
                <div className="mt-2 text-sm text-slate-600">
                  Weekly active learners after coaching nudges.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Mentor impact
                </div>
                <div className="mt-3 text-2xl font-semibold">3.8x</div>
                <div className="mt-2 text-sm text-slate-600">
                  Faster resolution on project feedback loops.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Coach timeline
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  <span className="rounded-full bg-emerald-50 px-3 py-1">
                    Mon: Kickoff call
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1">
                    Wed: Feedback sync
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1">
                    Fri: Demo review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70">
        <div className="mx-auto flex flex-col gap-6 px-4 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:gap-4">
          <div>
            <div className="font-display text-lg text-slate-900">
              KnowledgePulse
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
              Learning management with focus.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a className="hover:text-slate-900" href="#">
              Product
            </a>
            <a className="hover:text-slate-900" href="#">
              Pricing
            </a>
            <a className="hover:text-slate-900" href="#">
              Careers
            </a>
            <a className="hover:text-slate-900" href="#">
              Contact
            </a>
          </div>
          <div className="text-xs text-slate-400">
            2024 KnowledgePulse. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
