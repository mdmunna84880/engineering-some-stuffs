import { Heart } from "lucide-react";
import  Link  from "next/link";

function FavoriteButton() {
    return ( 
        <Link href="/cart" className="relative group">
            <Heart className="w-5 h-5 hover:text-shop-light-green hoverEffect"/>
            <span className="absolute -right-1 -top-1 bg-shop-dark-green text-white text-xs h-3.5 w-3.5 rounded-full font-semibold flex items-center justify-center">0</span>
        </Link>
     );
}

export default FavoriteButton;