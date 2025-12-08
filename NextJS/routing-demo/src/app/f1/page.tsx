import Link from "next/link";

function F1() {
    return ( 
        <div>
            F1 Page <br />
            <Link href="f1/f2" className="mx-4">F2</Link>
            <Link href="f3" className="mx-4">F3</Link>
        </div>
     );
}

export default F1;