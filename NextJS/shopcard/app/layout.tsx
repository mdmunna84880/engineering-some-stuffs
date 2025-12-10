import type { Metadata } from "next";
import "./globals.css";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
