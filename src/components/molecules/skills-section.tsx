import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useIntl } from "react-intl";
import { SectionHeading } from "@/components/molecules/section-heading";
import type { SkillGroup } from "@/data/resume";

export function SkillsSection({ skills }: { skills: ReadonlyArray<SkillGroup> }) {
  const intl = useIntl();

  return (
    <section id="skills" className="container py-14 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow={intl.formatMessage({ id: "section.skills.eyebrow" })}
          title={intl.formatMessage({ id: "section.skills.title" })}
          description={intl.formatMessage({ id: "section.skills.description" })}
        />
        <Card className="relative overflow-hidden">
          <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
          <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.id}>
                <h3 className="font-display text-xl font-semibold">
                  {intl.formatMessage({ id: `skills.${group.id}` })}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
