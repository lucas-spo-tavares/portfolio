import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { useIntl } from "react-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/molecules/section-heading";
import type { Credential } from "@/data/resume";

export function CredentialsSection({ credentials }: { credentials: ReadonlyArray<Credential> }) {
  const intl = useIntl();

  return (
    <section
      id="credentials"
      className="container py-14 sm:py-20"
    >
      <SectionHeading
        eyebrow={intl.formatMessage({ id: "section.credentials.eyebrow" })}
        title={intl.formatMessage({ id: "section.credentials.title" })}
        description={intl.formatMessage({ id: "section.credentials.description" })}
      />
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {credentials.map((credential) => (
          <Card
            key={credential.id}
            className="group"
          >
            <CardHeader>
              <BadgeCheck className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">
                {intl.formatMessage({ id: `credentials.${credential.id}.label` })}
              </CardTitle>
              <CardDescription>
                {intl.formatMessage({ id: `credentials.${credential.id}.detail` })}
              </CardDescription>
            </CardHeader>
            {"href" in credential ? (
              <CardContent>
                <a
                  className="inline-flex items-center gap-1 text-sm font-bold text-primary transition group-hover:gap-2"
                  href={credential.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View credential <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
