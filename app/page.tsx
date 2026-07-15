import CtaBlock from "@/components/cta-block"
import FeaturesBlock from "@/components/features-block"
import HeaderBlock from "@/components/header-block"
import HeroBlock from "@/components/hero-block"
import NewsletterBlock from "@/components/newsletter-block"
import FooterBlock from "@/components/footer-block"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
    <HeaderBlock />
    <HeroBlock />
    <FeaturesBlock />
    <NewsletterBlock />
    <CtaBlock />
    <FooterBlock />
    </>
  )
}
