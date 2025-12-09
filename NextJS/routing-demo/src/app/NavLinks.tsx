"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLinks(){
    const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/register", label: "Sign In" },

  ]
  const pathname = usePathname();
    return <ul className="flex items-center">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={`mr-4 text-blue-500 ${href === pathname? "font-bold": ""} `}>
                {label}
              </Link>
            ))}
          </ul>
}

export default NavLinks;