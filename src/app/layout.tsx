import type { Metadata } from "next";
import ReactQueryProvider from "./components/ReactQueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "product fetcher",
  description: "Fetch product data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
