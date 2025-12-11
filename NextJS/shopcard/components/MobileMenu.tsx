"use client";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            <button className="hover:text-dark-color hoverEffect md:hidden" onClick={()=>setIsOpen(!isOpen)}>
                <AlignLeft />
                <div className="md:hidden">
                    <SideMenu isOpen={isOpen} onClose={()=>setIsOpen(false)} />
                </div>
            </button>
        </>
     );
}

export default MobileMenu;