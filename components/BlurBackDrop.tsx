import { cn } from "@/lib/utils";

interface BlurBackDropProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function BlurBackDropComponent({
  className,
  onClick,
  children,
}: BlurBackDropProps) {
  return (
    <div
      id="blurBackdropComponent"
      onClick={onClick}
      className={cn(
        "fixed top-0 left-0 z-20 h-screen w-screen opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out sm:p-8",
        className,
      )}
    >
      <div
        id="backdropContent"
        className="absolute bottom-0 mx-auto w-fit translate-y-16 transform transition-all duration-300 ease-in-out sm:static sm:-translate-y-12"
      >
        {children}
      </div>
    </div>
  );
}
