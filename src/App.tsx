import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { ContactSection } from "@/components/molecules/contact-section";
import { CredentialsSection } from "@/components/molecules/credentials-section";
import { HeroSection } from "@/components/molecules/hero-section";
import { ProjectCard } from "@/components/molecules/project-card";
import { SectionHeading } from "@/components/molecules/section-heading";
import { SkillsSection } from "@/components/molecules/skills-section";
import { credentials, projects, skillGroups, resolveLocale } from "@/data/resume";
import { messages, type LocaleKey } from "@/i18n/messages";

export function App() {
  const [locale, setLocale] = useState<LocaleKey>(() => {
    const stored = window.localStorage.getItem("locale");
    if (stored === "en" || stored === "pt") {
      return stored;
    }

    return resolveLocale(window.navigator.language);
  });

  useEffect(() => {
    window.localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale="en"
      messages={messages[locale]}
      onError={() => {}}
    >
      <main className="min-h-screen overflow-hidden">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(239,123,69,0.28),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(45,108,99,0.22),transparent_24%),linear-gradient(135deg,#f8f0df_0%,#f3ead9_46%,#e7f0e9_100%)]" />
        <div className="fixed left-[-10rem] top-28 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="fixed bottom-[-12rem] right-[-8rem] -z-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

        <HeroSection
          onToggleLocale={() => setLocale((current) => (current === "en" ? "pt" : "en"))}
        />
        <section
          id="work"
          className="container py-14 sm:py-20"
        >
          <SectionHeading
            eyebrow={messages[locale]["section.work.eyebrow"]}
            title={messages[locale]["section.work.title"]}
            description={messages[locale]["section.work.description"]}
          />
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <SkillsSection skills={skillGroups} />
        <CredentialsSection credentials={credentials} />
        <ContactSection />
      </main>
    </IntlProvider>
  );
}
