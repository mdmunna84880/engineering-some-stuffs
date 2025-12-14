import { cn } from "@/lib/utils";

function Container({children, className}: {children: React.ReactNode, className?: string}) {
    return ( 
        <div className={cn("max-w-7xl mx-auto", className)}>
            {children}
        </div>
     );
}

export default Container;