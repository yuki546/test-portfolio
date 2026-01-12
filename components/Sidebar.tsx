import Image from "next/image";
import { SiGithub, SiX } from "react-icons/si";
import { TooltipIcon } from "./TooltipIcon";
// import Image from "next/image"; // Will use placeholder for now

export default function Sidebar() {
  return (
    <aside className="bg-brand-base-200 hidden h-full rounded-md py-5 shadow-md md:block md:w-52 lg:w-64">
      <div className="flex flex-col gap-4 px-5">
        {/* Profile Image Placeholder */}
        <div className="">
          <Image
            src="/profile_pic.webp"
            alt="Profile"
            width={144}
            height={144}
            className="mx-auto h-36 rounded-full"
          />
        </div>

        <div className="text-brand-secondary text-sm font-light tracking-wide">
          <div className="text-brand-secondary flex items-center gap-2 pb-4">
            <TooltipIcon
              icon={<SiGithub className="h-5 w-5" />}
              label="GitHub"
              href="https://github.com/yuki546"
            />
            <TooltipIcon
              icon={<SiX className="h-5 w-5" />}
              label="X"
              href="https://x.com/iraka_dev"
            />
          </div>

          <div className="mb-2 font-medium">
            <p>Yuki</p>
            <p>Markup Engineer</p>
            <p>Kochi, Japan</p>
          </div>
          <p className="mb-6 text-sm">
            Markup Engineer looking to start working with Next.js living in
            Kochi.
          </p>
        </div>
      </div>
    </aside>
  );
}
