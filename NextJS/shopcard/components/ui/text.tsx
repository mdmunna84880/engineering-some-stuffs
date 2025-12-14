import { cn } from "@/lib/utils";

interface titleProps{
    children: React.ReactNode,
    className?: string
}

function Title({children, className}:titleProps) {
    return ( 
         <h2 className={cn("text-2xl md:text-3xl font-bold text-shop-dark-green capitalize tracking-wide font-sans", className)}>{children}</h2>
     );
}

function SubTitle({children, className}:titleProps) {
    return ( 
         <h3 className={cn("font-semibold text-gray-900 font-sans", className)}>{children}</h3>
     );
}

function Subtext({children, className}:titleProps){
    return <p className={cn("text-gray-600 text-sm", className)}>{children}</p>
}

export {Title, Subtext, SubTitle};