"use client"

import { useEffect, useState } from "react"
import { RiArrowRightLine, RiLockLine } from "@remixicon/react"
import { toast } from "sonner"

export default function NewsletterForm() {
  // Initialize mounted based on window availability to avoid setting state
  // synchronously inside an effect which can trigger cascading renders.
  const [mounted] = useState<boolean>(() => typeof window !== "undefined")

  if (!mounted) {
    return (
      <div className="flex flex-col gap-3 md:max-w-md md:min-w-0 md:flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex-1 rounded-3xl border border-border bg-background px-3 py-2 text-base text-muted-foreground">
              work@company.com
            </div>
            <div className="shrink-0 inline-flex items-center justify-center rounded-4xl bg-primary/80 px-4 py-2 text-sm font-medium text-primary-foreground">
              Subscribe
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded border border-border bg-background" />
            <div className="text-sm text-muted-foreground">
              I agree to receive the Myworkspace Weekly newsletter.
            </div>
          </div>
        </div>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <RiLockLine aria-hidden="true" className="shrink-0" size={12} />
          Your data stays private. Unsubscribe any time, no questions asked.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 md:max-w-md md:min-w-0 md:flex-1">
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault()
          toast.success("You're subscribed. See you Tuesday!")
        }}
      >
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="work@company.com"
            aria-label="Email address"
            className="flex-1 rounded-3xl border border-border bg-background px-3 py-2 text-base outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
          />
          <button
            type="submit"
            className="shrink-0 inline-flex items-center justify-center rounded-4xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            Subscribe
            <RiArrowRightLine aria-hidden="true" className="ml-2" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="newsletter-consent"
            name="consent"
            type="checkbox"
            className="h-4 w-4 rounded border border-border bg-background text-primary focus-visible:ring-3 focus-visible:ring-ring/30"
          />
          <label
            htmlFor="newsletter-consent"
            className="text-sm font-normal text-muted-foreground"
          >
            I agree to receive the Acme Weekly newsletter.
          </label>
        </div>
      </form>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <RiLockLine aria-hidden="true" className="shrink-0" size={12} />
        Your data stays private. Unsubscribe any time, no questions asked.
      </p>
    </div>
  )
}
