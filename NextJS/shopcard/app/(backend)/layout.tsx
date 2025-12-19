import type { Metadata } from "next";
import "../(frontend)/globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: {
    template: "%s - Shopcard online store",
    default: "Shopcard online store"
  },
  description: "Shopcard online store, YOur one stop shop for all your needs.",
  appleWebApp: {
    title: "Shopcard",
    statusBarStyle: "default", 
  },
};

export default function StudioLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
        <html lang="en">
        <body className="font-poppins antialiased">
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}