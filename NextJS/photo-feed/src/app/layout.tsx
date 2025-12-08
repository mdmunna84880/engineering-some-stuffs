import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Photo Gallery",
  description: "A sample Next.js photo gallery with intercepting routes",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          {children}
          {modal}
        </div>
      </body>
    </html>
  );
}
