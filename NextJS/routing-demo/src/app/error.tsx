"use client";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

function ErrorBoundary({error, reset}: {error: Error, reset: ()=> void}){
    const router = useRouter();
    const reload = ()=>{
        startTransition(()=>{
            router.refresh();
            reset();
        });
    }

    return ( 
        <div>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <button onClick={reload} className="bg-blue-200 cursor-pointer">Try again</button>
        </div>
     );
}

export default ErrorBoundary;