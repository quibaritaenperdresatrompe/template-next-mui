import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeProvider from "@/styles/ThemeProvider";
import { type ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template Next MUI",
  description: "Build your app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
