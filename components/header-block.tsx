"use client"

import { RiArrowRightLine, RiMenuLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Career", href: "/career" },
  { label: "Integration", href: "/integration" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
]

export default function HeaderBlock() {
  return (
      <section className="w-full bg-background text-foreground">      <header className="relative flex h-16 w-full items-center border-b border-border px-6">
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <div className="grid grid-cols-2 gap-0.5" aria-hidden="true">
            <div className="size-2.5 bg-primary" />
            <div className="size-2.5 bg-primary" />
            <div className="size-2.5 bg-primary" />
            <div className="size-2.5 bg-primary" />
          </div>
          <span className="text-base font-bold tracking-tight">Myworkspace</span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Button
            render={<a href="#" aria-label="Sign In" />}
            nativeButton={false}
            variant="ghost"
            size="sm"
            className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            Sign In
          </Button>
          <Separator orientation="vertical" className="hidden h-5 sm:block" />
          <Button
            render={<a href="#" aria-label="Start Free Trial" />}
            nativeButton={false}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Start Free Trial
            <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="md:hidden" />
              }
              aria-label="Open menu"
            >
              <RiMenuLine aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2.5">
                  <div className="grid grid-cols-2 gap-0.5" aria-hidden="true">
                    <div className="size-2 bg-primary" />
                    <div className="size-2 bg-primary" />
                    <div className="size-2 bg-primary" />
                    <div className="size-2 bg-primary" />
                  </div>
                  Acme
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-2">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.label}
                    render={<a href={link.href} aria-label={link.label} />}
                    nativeButton={false}
                    className="px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <SheetFooter>
                <Button
                  render={<a href="#" aria-label="Sign In" />}
                  nativeButton={false}
                  variant="ghost"
                  className="w-full"
                >
                  Sign In
                </Button>
                <Button
                  render={<a href="#" aria-label="Start Free Trial" />}
                  nativeButton={false}
                  className="w-full"
                >
                  Start Free Trial
                  <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Welcome to Myworkspace</h1>
            <p className="text-muted-foreground">Delivering great products and delightful experiences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
