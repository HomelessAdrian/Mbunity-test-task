import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mbunity test task",
  description: "Created by Adrian Kaminskyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
