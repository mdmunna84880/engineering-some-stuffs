/** @format */

"use client";
import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import useOutSideClick from "@/hooks/useOutSideClick";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu: FC<SideMenuProps> = function ({ isOpen, onClose }) {
  const pathname = usePathname();
  const sideBarRef = useOutSideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen z-10 left-0 min-w-72 max-w-96 bg-black/50 text-white/80 shadow-xl ${
        isOpen ? "translate-0" : "-translate-x-full hoverEffect"
      }`}
    >
      <div
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop-light-green flex flex-col gap-6"
        ref={sideBarRef}
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className={`text-white`} spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop-light-green hoverEffect"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 font-semibold tracking-wide">
          {headerData.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={`hover:text-shop-light-green hoverEffect ${
                pathname === item.href && "text-shop-light-green"
              }`}
            >
              {item.title}
            </Link>
          ))}
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
