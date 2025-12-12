import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Youtube, Github, Linkedin, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

interface socialMediaProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

function SocialMedia({
  className,
  iconClassName,
  tooltipClassName,
}: socialMediaProps) {
  const socialLinks = [
    {
      title: "YouTube",
      href: "https://www.youtube.com",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/mdmunna84880/",
      icon: <Github className="w-5 h-5" />,
    },
    {
      title: "LinkedIn",
      href: "https://www.youtube.com",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      href: "https://www.youtube.com",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: "Twitter",
      href: "https://www.youtube.com",
      icon: <Twitter className="w-5 h-5" />,
    },
  ];

  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link href={item.href} className={cn("p-2 border rounded-full hover:text-white hover:border-shop-light-green hoverEffect", iconClassName)}>{item.icon}</Link>
            </TooltipTrigger>
            <TooltipContent className={cn(`bg-white text-dark-color font-semibold`, tooltipClassName)}>
                {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
