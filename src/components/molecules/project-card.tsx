import { ArrowUpRight } from "lucide-react";
import { useIntl } from "react-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/resume";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const intl = useIntl();

  return (
    <Card className={index === 0 ? "lg:col-span-2" : undefined}>
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <CardDescription>
              {intl.formatMessage({ id: `work.${project.id}.company` })} /{" "}
              {intl.formatMessage({ id: `work.${project.id}.period` })}
            </CardDescription>
            <CardTitle className="mt-2">
              {intl.formatMessage({ id: `work.${project.id}.title` })}
            </CardTitle>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {project.stack.map((item) => (
              <Badge
                key={item}
                variant="secondary"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>{intl.formatMessage({ id: `work.${project.id}.${bullet}` })}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
