"use client";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            <div className="hover:text-dark-color hoverEffect md:hidden">
                <AlignLeft onClick={()=>setIsOpen(!isOpen)} className="hover:text-shop-light-green cursor-pointer"/>
                <div className="md:hidden">
                    <SideMenu isOpen={isOpen} onClose={()=>setIsOpen(false)} />
                </div>
            </div>
        </>
     );
}

export default MobileMenu;