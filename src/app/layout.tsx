import type { Metadata } from "next";
import React from "react";

import "../globals.css";

export const metadata: Metadata = {
  title: "Potentiel",
  description:
    "Facilite le parcours des producteurs d'énergies renouvelables électriques",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={`antialiased px-4`}>{children}</body>
    </html>
  );
}
