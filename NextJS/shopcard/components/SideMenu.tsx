import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";

interface SideMenuProps{
    isOpen: boolean,
    onClose: ()=>void;
}
const SideMenu:FC<SideMenuProps> = function({isOpen, onClose}){
    return ( 
        <div className={`fixed inset-y-0 h-screen z-10 left-0 w-full bg-black/50 shadow-xl ${isOpen ? "translate-0": "-translate-x-full hoverEffect"}`}>
            <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop-light-green flex flex-col gap-6">
                <div>
                <div><Logo className={`text-white`}/>
                <X/></div>
            </div>
            <div></div>
            </div>
        </div>
     );
}

export default SideMenu;