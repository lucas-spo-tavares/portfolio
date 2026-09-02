import { Code2, FileDown, Link, Mail } from "lucide-react";
import { useIntl } from "react-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/resume";

export function ContactSection() {
  const intl = useIntl();

  return (
    <footer className="container pb-10 pt-14 sm:pt-20">
      <Card className="overflow-hidden bg-foreground text-background">
        <CardContent className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-primary">
              {intl.formatMessage({ id: "section.contact.eyebrow" })}
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {intl.formatMessage({ id: "section.contact.title" })}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              asChild
              variant="secondary"
              size="lg"
            >
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                {intl.formatMessage({ id: "section.contact.email" })}
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
                {intl.formatMessage({ id: "section.contact.resume" })}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/20 bg-background/10 text-background hover:bg-background/20"
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Link className="h-4 w-4" />
                {intl.formatMessage({ id: "social.linkedin" })}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/20 bg-background/10 text-background hover:bg-background/20"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 className="h-4 w-4" />
                {intl.formatMessage({ id: "social.github" })}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
