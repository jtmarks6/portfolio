import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeremy Marks | Software Engineer",
  description: "Software engineer with experience in backend development, data pipelines, and cloud technologies. Clemson University CS graduate.",
  keywords: ["Software Engineer", "Backend Developer", "Data Engineering", "Scala", "Python", "TypeScript"],
  authors: [{ name: "Jeremy Marks" }],
  openGraph: {
    title: "Jeremy Marks | Software Engineer",
    description: "Software engineer with experience in backend development, data pipelines, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
