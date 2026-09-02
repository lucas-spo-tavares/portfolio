import type React from "react";

export function ContactLine({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#23352f] text-[#fff8ed] [&_svg]:h-4 [&_svg]:w-4">
        {icon}
      </span>
      <span className="break-all text-sm font-bold">{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        className="flex items-center gap-3"
        href={href}
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3">{content}</div>;
}
