import Link from "next/link";
function F5() {
    return ( 
        <div>
            Intercepted F5 Page
            <Link href="/f5">F5</Link>
        </div>
     );
}

export default F5;