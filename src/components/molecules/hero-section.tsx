import {
  ArrowUpRight,
  Cloud,
  Code2,
  FileDown,
  Link,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { useIntl } from "react-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactLine } from "@/components/molecules/contact-line";
import { highlightIds, profile } from "@/data/resume";

export function HeroSection({ onToggleLocale }: { onToggleLocale: () => void }) {
  const intl = useIntl();

  return (
    <section className="container relative grid min-h-screen gap-10 py-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <nav className="absolute left-4 right-4 top-5 flex items-center justify-between rounded-full border border-foreground/10 bg-background/60 px-4 py-3 text-sm font-bold backdrop-blur md:left-8 md:right-8">
        <a
          href="#"
          className="font-display text-lg"
        >
          Lucas.dev
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#work"
            className="transition hover:text-primary"
          >
            {intl.formatMessage({ id: "nav.work" })}
          </a>
          <a
            href="#skills"
            className="transition hover:text-primary"
          >
            {intl.formatMessage({ id: "nav.skills" })}
          </a>
          <a
            href="#credentials"
            className="transition hover:text-primary"
          >
            {intl.formatMessage({ id: "nav.credentials" })}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="text-primary"
          >
            {intl.formatMessage({ id: "nav.contact" })}
          </a>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="rounded-full px-3 text-xs"
            onClick={onToggleLocale}
            aria-label="Switch language"
          >
            {intl.formatMessage({ id: "nav.language" })}
          </Button>
        </div>
      </nav>

      <div className="pt-24 sm:pt-28 lg:pt-0">
        <Badge
          variant="outline"
          className="mb-5 gap-2"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          {intl.formatMessage(
            { id: "hero.tag" },
            { role: profile.role, location: profile.location },
          )}
        </Badge>
        <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
          {intl.formatMessage({ id: "hero.title" })}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {intl.formatMessage({ id: "hero.summary" })}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
          >
            <a href="#work">
              {intl.formatMessage({ id: "hero.primaryCta" })} <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FileDown className="h-4 w-4" />
              {intl.formatMessage({ id: "hero.resumeCta" })}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Link className="h-4 w-4" />
              {intl.formatMessage({ id: "hero.linkedinCta" })}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Code2 className="h-4 w-4" />
              {intl.formatMessage({ id: "hero.githubCta" })}
            </a>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg lg:mx-0">
        <div className="absolute -right-10 -top-10 h-36 w-36 animate-float-slow rounded-[2.5rem] bg-primary/20" />
        <Card className="relative overflow-hidden border-foreground/15 bg-[#23352f] text-[#fff8ed]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#f2bd60] to-[#8ab17d]" />
          <CardHeader className="gap-4 p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[#f2bd60]">
                  {intl.formatMessage({ id: "hero.portfolioLabel" })}
                </p>
                <CardTitle className="mt-3 text-4xl sm:text-5xl">{profile.name}</CardTitle>
              </div>
              <Cloud className="h-9 w-9 text-[#f2bd60]" />
            </div>
            <CardDescription className="text-base leading-7 text-[#fff8ed]/70">
              {intl.formatMessage({ id: "hero.cardSummary" })}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 p-7 pt-0 sm:p-8 sm:pt-0">
            <div className="grid gap-3">
              {highlightIds.map((highlightId) => (
                <div
                  key={highlightId}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold"
                >
                  {intl.formatMessage({ id: highlightId })}
                </div>
              ))}
            </div>
            <div className="grid gap-3 rounded-3xl bg-[#fff8ed] p-4 text-[#23352f]">
              <ContactLine
                icon={<Mail />}
                label={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactLine
                icon={<Phone />}
                label={profile.phone}
                href={`tel:${profile.phone}`}
              />
              <ContactLine
                icon={<MapPin />}
                label={profile.location}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
