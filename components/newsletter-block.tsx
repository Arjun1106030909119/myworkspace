import NewsletterForm from "@/components/newsletter-form"

export default function NewsletterBlock() {
  return (
    <section
      suppressHydrationWarning
      className="flex w-full items-center justify-center bg-background px-6 py-12 text-foreground"
    >
      <div className="w-full max-w-5xl bg-muted px-8 py-10 sm:px-12 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="flex flex-col gap-3 md:max-w-sm">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Myworkspace Weekly
            </p>
            <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
              Insights that move your work forward
            </h2>
            <p className="text-sm text-muted-foreground">
              Product deep-dives, industry trends, and practical guides from the
              myworkspace team, landing in your inbox every Tuesday morning.
            </p>
          </div>

          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}
