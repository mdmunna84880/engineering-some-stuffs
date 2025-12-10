import { auth, currentUser } from "@clerk/nextjs/server"

export default async function DashboardPage(){
    const authobj = await auth();
    const userobj = await currentUser();
    console.dir(authobj);
    console.dir(userobj);
    return <div>
        <h1>Dashboard</h1>
    </div>
}