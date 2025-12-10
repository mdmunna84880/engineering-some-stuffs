"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache"; 

// 1. Define the path where your user table lives to update the UI automatically
const ADMIN_DASHBOARD_PATH = "/admin/users"; 

export async function setRole(formData: FormData) {
    // Check Authorization
    const { sessionClaims } = await auth();
    if (sessionClaims?.metadata?.role !== "admin") {
        throw new Error("Unauthorized: You must be an admin to perform this action.");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;
    const role = formData.get("role") as string;

    // Validate Input
    if (!id || !role) {
       console.error("Error: Missing ID or Role")
    }

    try {
        await client.users.updateUser(id, {
            publicMetadata: { role }
        });
        
        // Refresh the admin dashboard UI data
        revalidatePath(ADMIN_DASHBOARD_PATH);

    } catch (err) {
        console.error("Failed to set role:", err); // Log the real error for debugging
    }
}

export async function removeRole(formData: FormData) {
    // Check Authorization
    const { sessionClaims } = await auth();
    if (sessionClaims?.metadata?.role !== "admin") {
        throw new Error("Unauthorized: You must be an admin to perform this action.");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;

    if (!id) {
        console.error("Error: Missing User ID");
    }

    try {
        // FIX: We set the role to `null` to remove it from metadata
        await client.users.updateUser(id, {
            publicMetadata: { role: null }
        });

        // Refresh the admin dashboard UI data
        revalidatePath(ADMIN_DASHBOARD_PATH);

    } catch (err) {
        console.error("Failed to remove role:", err);
        console.error("Error: Failed to remove user role");
    }
}