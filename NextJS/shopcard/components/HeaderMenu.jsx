"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderMenu() {
    const pathname = usePathname();
    return ( 
        <div className="hidden w-1/3 md:inline-flex items-center gap-8 text-sm capitalize font-semibold text-light-color">
            {headerData?.map((item)=>(
                <Link key={item?.title} href={item?.href} className={`hover:text-shop-light-green hoverEffect relative group ${item?.href === pathname && "text-shop-light-green"}`}>{item?.title}
                <span className={`absolute -bottom-px left-1/2 w-0 h-0.5 bg-shop-light-green group-hover:w-1/2 hoverEffect group-hover:left-0 ${item?.href === pathname && "w-1/2"}`}/>
                <span className={`absolute -bottom-px right-1/2 w-0 h-0.5 bg-shop-light-green group-hover:w-1/2 hoverEffect group-hover:right-0 ${item?.href === pathname && "w-1/2"}`}/></Link>
                
            ))}
        </div>
     );
}

export default HeaderMenu;