import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  href?: string;
};

export const TooltipIcon = ({ icon, label, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-brand-accent transition-all duration-200 ease-in-out"
    >
      <div className="text-brand-secondary relative flex items-center">
        <div className="peer">{icon}</div>
        <div className="bg-brand-base-100 border-brand-secondary absolute top-8 left-0 -z-10 origin-top-left scale-75 transform rounded-md border p-2 whitespace-nowrap opacity-0 shadow-md transition-all duration-150 ease-in-out peer-hover:z-0 peer-hover:scale-100 peer-hover:opacity-100">
          {label}
        </div>
      </div>
    </a>
  );
};
